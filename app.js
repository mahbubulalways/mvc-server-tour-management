const express=require('express')
const cors=require('cors')
const app=express()
// middleware 
app.use(express.json())
app.use(cors())


const tourRoute=require('./routes/tours/v1/tours.route')

app.use('/api/v1/tour', tourRoute)

module.exports=app