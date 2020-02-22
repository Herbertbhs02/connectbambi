const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routers/auth')
const postRoute = require('./routers/search')
const cors = require('cors');


//MongoAltal URL

const {BAMBI_CONNECT} = require('./Secret')

//to connect to mongodb atlas-(cloud)
mongoose.connect(BAMBI_CONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true },

 ()=>console.log('connected to mongodb atlas'));

//middleware
app.use(express.json());

//Create router middleware
app.use(cors());
 app.use('/api/user', authRoute);
app.use('/api/search', postRoute)



const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is up and running at port ${port}`)
})
