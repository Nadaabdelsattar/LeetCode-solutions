const fs = require("fs");
const path = require("path");

const baseDir = "./";

// Folders for your languages
const folders = {
  ".js": "JavaScript",
  ".php": "PHP",
  ".sql": "SQL"
};

fs.readdirSync(baseDir).forEach(file => {
  const ext = path.extname(file);

  if (folders[ext]) {
    const targetDir = path.join(baseDir, folders[ext]);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }

    const oldPath = path.join(baseDir, file);
    const newPath = path.join(targetDir, file);

    fs.renameSync(oldPath, newPath);
    console.log(`Moved: ${file} → ${folders[ext]}/`);
  }
});
