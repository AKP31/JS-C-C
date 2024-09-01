// Declared in types- 

// //2. in the form of constructors(singleton)
// Object.create

//1. in the form of literals(not a singleton)
//key value pair.

//How to use symbol in objects

const mySym = Symbol("keyVal1")
const user = {
    name : "Ankit",
    "Full name":"Ankit Pandey",
    age : 24,
    // mySym: "keyvalue2",
    [mySym]: "keyvalue2",
    email : "ankitpandey3132000@gmail.com",
    location: "Jamshedpur",
    isFit : true,
    workoutDays : ["Monday","Wednesday","Friday"]
}

//How to access objects elements
console.log(user.email);//ankitpandey3132000@gmail.com
console.log(user["email"]);//ankitpandey3132000@gmail.com
console.log(user["Full name"]);//Ankit Pandey

// //printing symbol
// console.log(user.mySym);//keyvalue2
// //It is giving output but it is not of symbol data type
// console.log(typeof user.mySym);//string

//printing symbol in correct way
console.log(user[mySym]);//keyvalue2
//It is giving output but it is not of symbol data type
console.log(typeof mySym);//symbol

//How to change the value of objects
user.email = "akp@gmail.com"

Object.freeze(user)
//Now value can't be changed.

//Functions can also be treated as variables in JS

user.greetings = function(){
    console.log("Hello User");
}
user.greetingsNew = function(){
    console.log(`Hello User , ${this.name}`);
}

console.log(user.greetings());//Hello User
console.log(user.greetingsNew());//Hello User , Ankit







