
const express = require('express');


const app = express();
app.use((req,res,next)=>{
    console.log("midleware1 is called");
    next();
});

app.use((req,res,next)=>{
    console.log("middleware2 is called");
    res.send('<h1>hello node.js</h1>');
})
app.listen(3000);
