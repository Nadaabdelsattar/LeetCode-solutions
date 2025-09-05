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
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  }
});

// Function to move a whole folder
function moveFolder(src, dest) {
  if (!fs.existsSync(path.dirname(dest))) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
  }
  fs.renameSync(src, dest);
  console.log(`Moved folder: ${src} → ${dest}`);
}

fs.readdirSync(baseDir).forEach(item => {
  const itemPath = path.join(baseDir, item);
  const stat = fs.statSync(itemPath);

  if (stat.isDirectory()) {
    // check files inside the folder
    const files = fs.readdirSync(itemPath);
    for (const file of files) {
      const ext = path.extname(file);
      if (folders[ext]) {
        const targetDir = path.join(baseDir, folders[ext], item);
        moveFolder(itemPath, targetDir);
        break; // move once per folder
      }
    }
  }
});
