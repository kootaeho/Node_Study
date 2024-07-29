const express = require('express') //npm install express --save
const app = express()


// app.use('/pages', express.static(__dirname+'/pages')) //pages 경로로 들어오는 요청에 대해서는
// 로컬 폴더 __dirname : main.js가 있는 폴더 위치
// __dirname + '/pages'

app.listen(3000, ()=>{
    console.log("gg 누군가가 접속함.")
})



app.get('/', (req,res)=>{
    console.log("루트에 요청이 들어옴")
    //res.send("루트에 대한 요청")
    res.sendFile(__dirname + '/pages/index.html')
})

// app.get('/about', (req,res)=>{
//     console.log("/about에 요청이 들어옴")
//     //res.send("/about에 대한 요청")
//     res.sendFile(__dirname + '/pages/about.html')
// })

app.get('/working', (req,res)=>{
    console.log("/working에 요청이 들어옴")
    //res.send("/working에 대한 요청")
    res.sendFile(__dirname + '/pages/working.html')
})

//pages 경로로 들어오는 요청에 대해서는 로컬폴더 __dirname : main.js가 있는 폴더 위치
//__dirname + '/pages'
app.use('/pages', express.static(__dirname+'/pages'))
