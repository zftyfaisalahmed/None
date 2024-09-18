const express = require('express')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {StatusCodes} = require('http-status-codes')
const PORT = process.env.PORT
const connectdb = require('./db/connectDb')

//instance
const app = express()

//body parser
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//middleware
app.use(cors())
app.use(cookieParser(process.env.ACCESS_SECRET))

//Route
app.use('/api/user', require('./route/userRoute'))

//pnf
app.use(`*`, (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ msg : 'Requested path is unavailable' })
})

//Server
app.listen(PORT, () => {
    connectdb()
    console.log(`server is  started at http://localhost:${PORT}`)
})
