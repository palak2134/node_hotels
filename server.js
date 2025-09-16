const express = require('express');
const app = express();
const db = require('./db');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);

passport.use(new LocalStrategy(async (USERNAME, password,done) =>{
    try{
        console.log("Received credentials:", USERNAME, password);
        const user = await Person.findOne({username: USERNAME});
        if(!user)
            return done(null, false, {message: 'Incorrect username'});

        const isPasswordMatch = user.password ===password ? true: false;
        if(isPasswordMatch){
            return done(null, user);
        }
        else{
            return done(null,false, {message: 'Incorrect Password'});
        }
    }
    catch(err){
        return done(err);
    }
}));

app.get('/',function(req, res){
    res.send('Welcome to my vlog....');
})



//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
app.listen(3000, ()=>(console.log("Server Started")));
