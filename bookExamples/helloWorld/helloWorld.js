var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode){
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data) {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }
    (function(count,cb){
        count=count+5;
        if(count>3){
            cb("Error - over 5", count);
        }
        else {
        cb(null, count);
        }
    })(1,function(err,cnt){ 
        if(err) console.log(err);
        else console.log(cnt);
    })

    });

}

http.createServer(function(req,res){
    //normalize the url by removing querystring, optional trailing slash, and making it lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case '': 
            //res.writeHead(200, { 'Content-Type': 'text/plain'});
            //res.end('Homepage');
            serveStaticFile(res, '/public/home.html', 'text/html');       
            break;
        
        case '/about':
            //res.writeHead(200, { 'Content-Type': 'text/plain'});
            //res.end('About');
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        
        case '/img/logo.jpg':
            //res.writeHead(200, { 'Content-Type': 'text/plain'});
            //res.end('About');
            serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
            break;
        

        default:
            //res.writeHead(404, { 'Content-Type': 'text/plain'});
            //res.end('Not Found');
            serveStaticFile(res, '/public/404.hmtl', 'text/html');
            break;
    }

}).listen(3000);

console.log('Server started on localhost:3000');