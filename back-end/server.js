const app = require("./app")
const dotenv = require('dotenv')
const path = require('path')
const connectDatabase = require("./configuration/database")
dotenv.config({path:'configuration/config.env'})
const PORT = process.env.PORT || 3000
connectDatabase()


app.listen(PORT ,()=>{
    console.log(`the server run on port ${PORT} and in environment of ${process.env.NODE_ENV}`)
})