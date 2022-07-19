//Click node to open
//Hit Tab to get all the features of the node
// _ is the previous result
// cltr+k to clear console

//Reading files from file system
// const fs = require('fs');

//reading & writing file  synchronously(blocking)
// const textIn = fs.readFileSync('.txt/input.txt', 'utf-8');//2nd one is the character encoding
// const textOut = `This is the what we know about the avecado : ${textIn}.\n created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);//this writes file in output.txt by creating it or modyfing it

//reading & writing file asynchronously(non-blocking)
// fs.readFile('./txt/start.txt', (err, data) => {//first is error and second is data(3rd paremeter takes a function)
//     if (err) return console.log('there is a error!!');
//     console.log(data);
// });
// fs.writeFile('./text/final.txt', `whatever we want to write`, 'utf-8', err => {//it has only error argument
//     console.log('Your file has been read!');
// })
//Gives the built in http model
const http = require('http');
//Server
const server = http.createServer((req, res) => {//request and response variable
    res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});//it is a address