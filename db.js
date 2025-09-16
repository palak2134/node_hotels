const mongoose = require('mongoose');
//define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'
//setup mongodb connection
mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology:true

})
//get a default connection
const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to MongoDB server.')
});

db.on('error', (err)=>{
    console.log('MongoDb connection erro: ', err)
});

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected')
});

//export the database connection
module.exports = db;