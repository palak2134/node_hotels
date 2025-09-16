const jsonstring = '{"name": "Palak", "age": 22, "city": "Bhopal"}';
const jsonobj = JSON.parse(jsonstring);//JSON String --> Object.
console.log(jsonobj);

const jsonobj1 ={
    name : "Palak",
    age : 22
};
const jsonString = JSON.stringify(jsonobj1);
console.log(jsonString);