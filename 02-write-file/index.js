
// подключаем модули fs, path, process
const fs = require('fs');
const path = require('path');
const {stdin, stdout, exit, error} = process;

//создаем файл
const file = path.join(__dirname, 'note.txt');


//создаем поток чтения и записи в файл
const stream = fs.createWriteStream(file);

console.log('Write your text, please');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
     exit();
  };
  stream.write(data);
});

process.on('exit', () => console.log("File has been created"));  

