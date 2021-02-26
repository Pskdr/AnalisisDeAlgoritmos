/**
 * archivo principal del api
 */

 const express = require("express")

 const app = express()

const routers = require('./routers/index');
app.use(routers);


const port = 3000
 app.listen(port, ()=>{
     console.log(`API node: http://localhost:${port}/`);
 });