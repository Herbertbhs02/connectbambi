const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routers/auth')


//MongoAltal URL
const Secret = require('./Secret')

//to connect to mongodb atlas-(cloud)
mongoose.connect(Secret,
  { useNewUrlParser: true,
    useUnifiedTopology: true },

 ()=>console.log('connected to mongodb atlas'));

//middleware
app.use(express.json());

//Create router middleware
 app.use('/api/user', authRoute);



const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is up and running at port ${port}`)
})
