//http://127.0.0.1:1337/echo?message=Hello -> Hello

var http = require('http'); // Import Node.js core module
var url = require('url'); // Import Node.js core module

var server = http.createServer(function(req, res) {
    console.log(req.method, req.url);     // Log the request method and URL

    var q = url.parse(req.url, true); // Parse the request url
    //debugger;
    
    console.log(q); // Log the parsed url

    if (q.pathname == '/echo' && q.query.message) { // Check if the path is '/echo' and the query parameter 'message' is present (Проверьте, является ли путь «/echo» и присутствует ли параметр запроса «message».)
        res.end(q.query.message); // End the response and send the message
        
    } else {
        res.statusCode = 400; // Set the status code to 400
        res.end('Page not found'); // End the response and send an error message
    }
});

server.listen(1337 , '127.0.0.1'); // Server listens on port 1337 and IP

// supervisor server.js - отсвлеживает изменения в файлах и перезапускает сервер
// node server.js - запускает сервер
// node debug server.js - запускает сервер в режиме отладки