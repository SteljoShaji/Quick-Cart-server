require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./Routes/router')

const quickCartServer = express()

quickCartServer.use(cors())
quickCartServer.use(express.json())
quickCartServer.use(router)

const PORT = 3000 || process.env.PORT

quickCartServer.listen(PORT,()=>{
    console.log(`QuickCart server listining at port ${PORT} and waiting for client request!!!`);
})

quickCartServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>QuickCart server connected successfully and waiting for request!!</h1>`)
})