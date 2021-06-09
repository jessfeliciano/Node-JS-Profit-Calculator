const { readFile } = require('fs').promises;
const myModule = require('./reference/my-module');
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    // One way to serve html files to the front end
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'})
    //         res.end(content);
    //     })
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'})
    //         res.end(content);
    //     })
    // }
    // if(req.url === '/api/users'){
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30}
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }
  //END---- One way to serve html files to the front end
  
    
    // Build file path
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname){
        case '.js':
            contentType= 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                // If page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) =>{
                    res.writeHead(200, { 'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            } else {
                // If it's some other server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else{
            // If the file successfully loads 
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// How to load pages iwth express
// const app = express();

// app.use('/static',express.static(__dirname +'static'));

// app.get('/', async (request, response) => {

//     response.send( await readFile('./home.html', 'utf8') );

// });

// app.listen(process.env.PORT || 3000,() => console.log(`App available on http://localhost:3000`))
// How to load pages iwth express -- end








// console.log(myModule)

// async function hello(){
//     const file = await readFile('./hello.txt', 'utf8');
//     console.log(file)
// }

// const { readFile, readFileSync } = require('fs');

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// });g
// const txt = readFileSync('./hello.txt', 'utf8');


// import { EventEmitter } from 'events';
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('Time for lunch!');
// })

// process.on('exit', function(){
//     console.log('Enjoy!');
// })



// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');