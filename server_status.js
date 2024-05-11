//http://127.0.0.1:1337/echo?message=Hello
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    console.log(req.headers); // Log the request headers

    var q = url.parse(req.url, true); // Parse the request url

    if (q.pathname == '/echo' && q.query.message) { // Check if the path is '/echo' and the query parameter 'message' is present
        res.setHeader('Cahce-Control', 'no-cache'); // Set the 'Cache-Control' header to 'no-cache
        //res.statusCode = 200; // Set the status code to 200
        res.end(q.query.message); // End the response and send the message

    } else {
        res.statusCode = 400; // Set the status code to 400
        res.end('Page not found'); // End the response and send an error message
    }
});

server.listen(1337, '127.0.0.1'); // Server listens on port 1337 and IP