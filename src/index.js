const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const authRoute = require('./routers/auth')
const searchdbRoute = require('./routers/searchdb')
const messageUpdateRoute = require('./routers/messageupdate')
const listall = require('./routers/listall')
const messages = require('./routers/messages')
const retrieveMessages = require('./routers/retrievemessages')
const deleteleftmessages = require('./routers/deleteleftmessages')

require('dotenv').config({path: __dirname + '/.env'})


const BAMBI_CONNECT = process.env.BAMBI_CONNECT


//MongoAltal URL


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
 app.use('/api/user/', listall);
 app.use('/api/messages/', messages);
 app.use('/api/', retrieveMessages);
 app.use('/api/', deleteleftmessages);

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is up and running at port ${port}`)
})
