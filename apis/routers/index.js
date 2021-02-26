const express = require("express");


const router = express.Router()

router.get(usuarios,(req, res)=>{
return res.send("Hola mundo. usuarios")
});

module.exports = router