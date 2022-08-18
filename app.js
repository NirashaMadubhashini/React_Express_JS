const express = require('express')
const mongoose = require('mongoose')

const customer = require('./routes/customer')
const item = require('./routes/item')
const user = require ('./routes/user')
const order = require ('./routes/Order')
const orderDetail = require ('./routes/OrderDetails')

const app = express()
const port = 6000

app.use(express.json())
app.use('/customer', customer)
app.use('/items',  item)
app.use('/users',user)
app.use('/orders',order)
app.use('/orderDetail',orderDetail)



app.listen(port, () => {
    console.log(`app starting on ${port}`);
})