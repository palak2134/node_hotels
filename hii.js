const express=require('express')
const app=express();
const _ = require('lodash');
console.log("Hello");

 var add = (a, b, callback)=>{
    console.log("Call back");
    callback();
    
 }
 add(2,3, ()=>{console.log("Inside Callback.")});
 var a = 10;
 var addNumber = (a,b) => { return (a + b)};

 module.exports = {
    a,
    addNumber
 }

 var data = [1,2,1,2,1,2,1];
 var filter = _.uniq(data);
 console.log(filter)

app.listen(8000,()=>{
    console.log("Server Started")});

