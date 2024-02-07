const express = require('express') //npm install express --save
const app = express()


app.listen(3000, ()=>{
    console.log("누군가가 접속함.")
})