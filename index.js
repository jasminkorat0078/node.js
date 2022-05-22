const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title> home page</title></header>');
        res.write('<body> welcome home</body>');
        res.write('</html>');
        res.end();
    }
    if(req.url ==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title> about page</title></header>');
        res.write('<body> welcome about page</body>');
        res.write('</html>');
        res.end();
    }
    if(req.url ==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title> Node.js page</title></header>');
        res.write('<body> welcome Node.js page</body>');
        res.write('</html>');
        res.end();
    }


});

server.listen(4000);


