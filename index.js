const express = require("express")
require("dotenv").config()
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const userRouter = require("./users/userRouter")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cookieParser())
server.use(express.json())
server.use(cors())


server.use(userRouter)

server.get("/", (req,res,next) => {
    res.json({
        message: "Welcome to our API"
    })
})

server.use((err, req, res,next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})