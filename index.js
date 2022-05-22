const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("jasmin");
});

server.listen(4000);


