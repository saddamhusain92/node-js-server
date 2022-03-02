const express = require("express")
const mongoose = require('mongoose')
const routes = require("./routes/routes")
const cors  = require('cors')
const URL = "mongodb+srv://reactjs:reactjs@cluster0.fjx7f.mongodb.net/reactdata?retryWrites=true&w=majority"
mongoose.connect(URL,()=>{
console.log("my database is connected");

})
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
 res.json({information:"Developed by SD husain 2022 API is working"})
})
app.use('/api',routes)
const port = process.env.PORT||5000
 app.listen(port,()=>{
     console.log(`run server ${port}`);
 })




        