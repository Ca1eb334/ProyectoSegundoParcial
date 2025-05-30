const http = require('http');
const fs = require('fs');

// HTTP => (request, response) 

http.createServer((request, response) => {
    const file = request.url == '/' ? "www/index.html" : `www/${request.url}`;
    fs.readFile(file, (error, data)=>{
        if (error){
            response.writeHead(404, {"Content-Type": 'text/plain'});
            response.write('Not Found');
            response.end();
        } else {
            const ext = request.url == '/' ? "html" : request.url.split(".").pop();
            switch (ext){
                case 'html':
                    response.writeHead(200, {"Content-Type": 'text/html'});
                break;
                case 'css':
                    response.writeHead(200, {"Content-Type": 'text/css'});
                break;
                default:
                    response.writeHead(200, {"Content-Type": 'text/plain'});
            }
            response.write(data);
            response.end();
        }
        });
    
}).listen(8888);