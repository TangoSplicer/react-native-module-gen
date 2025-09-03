const fs = require('fs').promises;
const path = require('path');

exports.ensureDir = async (dir) => {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
};

exports.writeFile = fs.writeFile;
exports.copyFile = fs.copyFile;