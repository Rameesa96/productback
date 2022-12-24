const express = require('express')
const mongoose =require('mongoose')
const path =require("path")
const app =express()
const port = process.env.PORT||5000
const productroute = require("./routes/product")
const categoryroute =require("./routes/category")
const bodyparser =require("body-parser")
const cors=require('cors')
mongoose.connect('mongodb+srv://rami:1234@product.bwuyfeg.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})
mongoose.connection.on("error",()=>{
    console.log("mongodb disconnected")
})


app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded())

app.use('/product',productroute)
app.use('/category',categoryroute)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../products', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../products', 'build', 'index.html'));
  })
}
app.listen(port,()=>{
    console.log("server started")
})