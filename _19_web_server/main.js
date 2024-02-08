const express = require('express') //npm install express --save
const app = express()


app.listen(3000, ()=>{
    console.log("gg 누군가가 접속함.")
})


//처리해주는 루틴 추가
app.get('/', (req,res)=>{
    console.log("루트에 요청이 들어옴")
    //res.send("루트에 대한 요청")
    res.sendFile(__dirname + '/pages/index.html')
})

app.get('/about', (req,res)=>{
    console.log("/about에 요청이 들어옴")
    //res.send("/about에 대한 요청")
    res.sendFile(__dirname + '/pages/about.html')
})