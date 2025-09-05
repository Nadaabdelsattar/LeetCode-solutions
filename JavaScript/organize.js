const fs = require("fs");
const path = require("path");

const baseDir = "./";

const folders = {
  ".js": "JavaScript",
  ".php": "PHP",
  ".sql": "SQL"
};


function organizeFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      
      if (!Object.values(folders).includes(file)) {
        organizeFiles(filePath);

        
        if (fs.readdirSync(filePath).length === 0) {
          fs.rmdirSync(filePath);
          console.log(`Deleted empty folder: ${filePath}`);
        }
      }
    } else {
      
      const ext = path.extname(file);
      if (folders[ext]) {
        const targetDir = path.join(baseDir, folders[ext]);

        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir);
        }

        const newPath = path.join(targetDir, file);
        fs.renameSync(filePath, newPath);
        console.log(`Moved: ${file} → ${folders[ext]}/`);
      }
    }
  });
}

organizeFiles(baseDir);
