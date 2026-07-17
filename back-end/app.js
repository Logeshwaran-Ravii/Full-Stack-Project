const express = require('express');
const product = require('./routes/products-routes');
const users =require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1',product)
app.use('/api/v1',users)


module.exports = app