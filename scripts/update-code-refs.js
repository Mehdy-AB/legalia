const fs = require('fs');
const path = require('path');

const MAPPING_FILE = path.join(__dirname, '..', 'video-mapping.json');
const SRC_DIR = path.join(__dirname, '..', 'src');

if (!fs.existsSync(MAPPING_FILE)) {
    console.error("Mapping file not found!");
    process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));

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

const sourceFiles = getAllFiles(SRC_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss', '.html'].includes(ext);
});

console.log(`Scanning ${sourceFiles.length} files for video references...`);

sourceFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let hasChanges = false;

    Object.keys(mapping).forEach(localPath => {
        const remoteUrl = mapping[localPath];
        const localPathNoSlash = localPath.substring(1); // "images/foo.mp4"

        // Patterns to replace usually inside quotes or url()
        // We target: "/path", '/path', "path", 'path', (/path), (path)

        const replacements = [
            { from: `"${localPath}"`, to: `"${remoteUrl}"` },
            { from: `'${localPath}'`, to: `'${remoteUrl}'` },
            { from: `(${localPath})`, to: `(${remoteUrl})` },
            { from: `"${localPathNoSlash}"`, to: `"${remoteUrl}"` },
            { from: `'${localPathNoSlash}'`, to: `'${remoteUrl}'` },
            { from: `(${localPathNoSlash})`, to: `(${remoteUrl})` },
            // Also catch Next.js Image/Video src={Require...} or similar? 
            // User mentions "replace there inmporte i code with url".
            // Assuming string paths.
        ];

        replacements.forEach(({ from, to }) => {
            if (content.indexOf(from) !== -1) {
                // Use split/join for global replacement of the literal string
                const newContent = content.split(from).join(to);
                if (newContent !== content) {
                    console.log(`[${path.relative(SRC_DIR, file)}] Replaced ${from} with URL`);
                    content = newContent;
                    hasChanges = true;
                }
            }
        });
    });

    if (hasChanges) {
        fs.writeFileSync(file, content, 'utf8');
    }
});

console.log("Code update complete.");
