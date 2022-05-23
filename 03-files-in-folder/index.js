const path = require('path');
const { readdir, stat } = require('fs').promises;
const { stdout } = process;


(async() =>  {
  const pathFolder = path.join(__dirname, 'secret-folder');

  try {
    const dir = await readdir(pathFolder, { withFileTypes: true });
    for (const file of dir) {
      if (file.isFile()) {
        const fileSize = await stat(path.join(pathFolder, file.name));
        console.log(`${path.parse(file.name).name}-${path.extname(file.name).slice(1)}-${+fileSize.size/1000}kb`);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
})();