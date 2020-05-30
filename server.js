const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/database')
const userrouter = require('./router/userrouter')
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

mongoose.connect(config.database)
let db = mongoose.connection

db.once('open', ()=>{
    console.log("database connected ...")
})
db.on('err', (err)=>{
    console.log(err)
})

app.use('/users', userrouter)

app.listen(port, (err)=>{
    if(err) throw err
    console.log(`app listening on port ${port} ...`)
})