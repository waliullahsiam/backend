
require('dotenv').config()


const express = require('express')
const app = express()
const port = process.env.PORT||6000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{

    res.send("Twitter calling");
})

app.get('/login',(req,res)=>{

    res.send("<h1>Please login at chai or code</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})