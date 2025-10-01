const fs = require("fs");
const path = require("path");

const baseDir = "./";

const folders = {
  ".js": "JavaScript",
  ".php": "PHP",
  ".sql": "SQL"
};

// Create language folders if they don't exist
Object.values(folders).forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  }
});

// Function to move a whole folder
function moveFolder(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const target = path.join(path.dirname(dest), path.basename(src));
  fs.renameSync(src, target);
  console.log(`Moved folder: ${src} → ${target}`);
}

fs.readdirSync(baseDir).forEach(item => {
  const itemPath = path.join(baseDir, item);
  if (!fs.statSync(itemPath).isDirectory()) return;

  // check extensions inside the folder
  const files = fs.readdirSync(itemPath);
  const foundExt = files.map(file => path.extname(file)).find(ext => folders[ext]);

  if (foundExt) {
    const targetDir = path.join(baseDir, folders[foundExt]);
    moveFolder(itemPath, targetDir);
  }
});