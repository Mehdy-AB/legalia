const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dywcowkoy',
    api_key: '649537653726767',
    api_secret: 'RljdwGgx5ZBeN91BbUkeywWfk1w',
    secure: true,
});

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAPPING_FILE = path.join(__dirname, '..', 'video-mapping.json');
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.webm'];

// Check if mapping exists to skip already uploaded
let existingMapping = {};
if (fs.existsSync(MAPPING_FILE)) {
    try {
        existingMapping = JSON.parse(fs.readFileSync(MAPPING_FILE));
    } catch (e) {
        console.error("Could not parse existing mapping file");
    }
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, '/', file));
        }
    });

    return arrayOfFiles;
}

async function uploadVideo(filePath) {
    const relativePath = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, '/');
    const localKey = '/' + relativePath;

    if (existingMapping[localKey]) {
        console.log(`Skipping ${relativePath} (already in mapping)`);
        return {
            localPath: localKey,
            remoteUrl: existingMapping[localKey]
        };
    }

    try {
        const publicId = relativePath.replace(/\.[^/.]+$/, ""); // Remove extension

        console.log(`Uploading ${relativePath}...`);

        // Wrap upload_large in a Promise
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_large(filePath, {
                resource_type: "video",
                public_id: publicId,
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                chunk_size: 6000000 // 6MB chunks
            }, (error, result) => {
                if (error) reject(error);
                else resolve(result);
            });
        });

        console.log('Upload result:', JSON.stringify(result, null, 2));

        return {
            localPath: localKey,
            remoteUrl: result.secure_url
        };
    } catch (error) {
        console.error(`Failed to upload ${filePath}:`, error);
        return null;
    }
}

async function main() {
    const allFiles = getAllFiles(PUBLIC_DIR);
    // Filter for video extensions
    const videoFiles = allFiles.filter(file => VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase()));

    console.log(`Found ${videoFiles.length} video files.`);

    const mapping = { ...existingMapping };

    for (const file of videoFiles) {
        const result = await uploadVideo(file);
        if (result) {
            console.log(`Adding to mapping: ${result.localPath} -> ${result.remoteUrl}`);
            mapping[result.localPath] = result.remoteUrl;
            // Save progress incrementally
            fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
        } else {
            console.error(`Result was null for ${file}`);
        }
    }

    console.log(`Migration complete. Mapping saved to ${MAPPING_FILE}`);
}

main();
