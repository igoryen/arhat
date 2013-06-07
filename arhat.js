


var http = require("http"); // 1
var fs   = require("fs"); //9

http.createServer(function (request, response) { // 2
   //request.on("end", function () { // 3


    fs.readFile('test.txt', 'utf-8', function (error, data){

        response.writeHead(200, { // 4
           'Content-Type': 'text/plain' // 7
         });

        data = parseInt(data) + 1; // 10

        fs.writeFile('test.txt', data); // 11

        response.end('Times this page was refreshed: [' + data + ']'); // 5
    });
   //});
}).listen(8080); // 6
console.log('Server listening. (http://localhost:8080). Refresh the page several times.'); // 8

/*
 =================================================================
 1) Include http module.
 2) Create the server. 
    A function is passed as parameter. This function is called on every request made.
    $request holds all request parameters.
    $response allows you to do anything with response sent to the client.
 3) Attach listener on end event.
    This event is called when client sent all data and is waiting for response.
 4) Write headers to the response.
    200 is HTTP status code (this one means success)
 5) Send data and end response.
 6) Listen on the 8080 port.
 7) Second parameter, holds header fields in object
    Content-Type is 'text/plain' because we are sending plain text
 8) This text will show up in the terminal
 9) fs.readFile() - to read a file
    fs.writeFile() - to write to a file
 10) Increment the number obtained from file.
 11) fs.writeFile(A, B [, C, D])
      A: file name
      B: data
      C: encoding
      D: callback function

*/
