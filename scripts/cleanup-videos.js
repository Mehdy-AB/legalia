const fs = require('fs');
const path = require('path');

const MAPPING_FILE = path.join(__dirname, '..', 'video-mapping.json');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

if (!fs.existsSync(MAPPING_FILE)) {
    console.error("Mapping file not found!");
    process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));

Object.keys(mapping).forEach(localPath => {
    // localPath starts with /, e.g. /home.mp4
    const fullPath = path.join(PUBLIC_DIR, localPath);

    if (fs.existsSync(fullPath)) {
        try {
            fs.unlinkSync(fullPath);
            console.log(`Deleted: ${fullPath}`);
        } catch (err) {
            console.error(`Failed to delete ${fullPath}:`, err);
        }
    } else {
        console.warn(`File not found (already deleted?): ${fullPath}`);
    }
});

console.log("Cleanup complete.");
