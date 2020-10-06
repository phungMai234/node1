let http = require('http');
let url = require('url');

var server = http.createServer(function(req, res)
    {
        res.writeHead(200, {"Content-type" : "text/html"});
        if(req.method == 'GET' && req.url == '/hello')
        {
            res.write('world');
        }
        if(req.method == 'POST' && req.url == '/hello')
        {
            res.write('world created');
        }

        res.end();
    }
);
server.listen(8000, 'localhost', function (err) {
    if(!err)
    {
        console.log('server is live on 3000');
    }
    else
        console.log(err);
});
