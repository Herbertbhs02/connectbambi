const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const authRoute = require('./routers/auth')
const searchdbRoute = require('./routers/searchdb')
const messageUpdateRoute = require('./routers/messageupdate')

//MongoAltal URL
const {BAMBI_CONNECT} = require('./Secret')

//to connect to mongodb atlas-(cloud)
mongoose.connect(BAMBI_CONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true },

 (error)=>console.log(`Connection requested`));

//middleware
app.use(express.json());
app.use(cors());

//Create router middleware

 app.use('/api/user', authRoute);
 app.use('/api/user', searchdbRoute);
 app.use('/api/user/', messageUpdateRoute);


const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is up and running at port ${port}`)
})
