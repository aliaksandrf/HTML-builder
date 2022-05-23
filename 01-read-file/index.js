
//импортируем модуль путей
const path = require('path'); 
// импортируем модуль для работы с файловой системой
const fs = require('fs'); 

//находим нужный файл с помощью метода join, где __dirname - путь до нашей папки и text.txt - имя файла
const fileText = path.join(__dirname, 'text.txt');


/* создаем поток для чтения информации из файла с помощью fs.createReadStream(path[, options]),
указывая наш файл и опционально кодировку */
const stream = fs.createReadStream(fileText, 'utf-8'); 

//создаем переменную для записи отдельных чанков при чтении потока
let content = '';

//считываем чанки при событии data и накапливаем их в переменной content
stream.on('data', chunk => content += chunk);

//после завершения потока по событию end выводим данные в консоль
stream.on('end', () => console.log(content));

//обрабатываем потенциальную ошибку с ее выводом при наличии в консоль
stream.on('error', error => console.log("Error: " + error.message));

