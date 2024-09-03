//{}=> scope
let a = 500

if(true){
    let a =20
    const b=60
    var c = 65
}

console.log(c);//65
//but this should not happen, as c scope is within the if statement. So, this is the problem of var.This does not happens with let and const.

console.log(a);//500
//correct desired scope output and it also helps with the programming bugs.

//within the if statement or any {}, those are known as block scope.
//outside the block scope, it is known as global scope.

//global scope is different in browser environment and node environment.

function one(){
    const username = "Ankit"
    function two(){
        const website = "Youtube"
        // console.log(username);
        //Inside two, username can be assessed
        
    }
    console.log(website);
    //here we cannot access child scope

    
}
//In nested function, the child function can access the parent variables but parent function cannot access child function variables.

//scope with if else

if(true){
    const firstName = "Ankit"
    if(firstName==="Ankit"){
        const lastName = " Pandey"
        console.log(firstName+lastName);
    }
    // console.log(lastName);
    //Will give error.
    //We cannot access
    
}
// console.log(firstName);
//Will give error.
//We cannot access.

//Interesting Concept:-Hoisting
console.log(addOne(3));
//this will not give error

function addOne(num){
    return num+1;
}

console.log(addTwo(4));
//this will give error

const res = function addTwo(num){
    return num + 2;
}
