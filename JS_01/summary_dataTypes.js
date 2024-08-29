//based on how data is stored in memory and accessed in memory, it is divided into two types:- primitive and non-primitive(reference)

//primitive(call by value)
//7 types - String,Number, Boolean,null, undefined,Symbol, BigInt

const num = 11
const num1 = 11.09

const isChecked = false

const tempInside = null

let emailCandidate;//value will be undefined

const id = Symbol('121')
const id1 = Symbol('121')

console.log(id == id1);//false

const bigNum = 16755678654665656n


//reference i.e also known as non-primitive
//Array, Objects, Functions

const names = ["Ankit", "Rohit","Virat"];
let myObj ={
    name : "Ankit",
    age : 24,
    surname : "Pandey"
}

const myfun = function(){
    console.log("My Name Is Ankit");
    
}

//know the type of datatype

console.log(typeof myfun);//function



//Is JS dynamically typed or statically typed language?
//-dynamically types. We dont have to specify the data types.