const path = require('path');
const fs = require('fs');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let content = '';

stream.on('data', chunk => content += chunk);
stream.on('end', () => console.log(content));
stream.on('error', error => console.log(error.message));

