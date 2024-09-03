
//this - used to refer current context

const user = {
    username : "Ankit",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to this website`);
        
    }
}

console.log(user.welcomeMessage());
//Ankit, welcome to this website
user.username = "Pandey"
console.log(user.welcomeMessage());
//Pandey, welcome to this website

console.log(this);//{}
//empty object.So current context is empty object.
//In node environment, this refers to empty object.
//In browser environment, the result will be different.
//Result will be window object.

//Later, there was only one way to execute JS. That was through inside browser. The engine was only at one place , that was inside browser. Now, we have standealone engine (i.e Dino, Node)
// So inside browser, the global object is window object. 
//This is the reason for the above results at node environment and browser environment.

function chai(){
    console.log(this);
    
}
chai();
//So, here there will be not empty object. There will be ample amount of content inside the object.

function code(){
    const name = "Ankit"
    console.log(this.username);//undefined
    
}
code()
const chai= function(){
    const name = "Ankit"
    console.log(this.username);//undefined
    
}
chai()
//So, we cannot use "this" inside function as we were using inside objects.


//----arrow function--------
//syntax -  ()=>{}
const chai = ()=>{
    const username = "Ankit"
    console.log(this.username);//undefined
    console.log(this);//{}
    
}
chai()

const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(2,4));//6

//implicit return method
const addTwoImp = (num1,num2)=> num1+num2
console.log(addTwoImp(2,5));//7

//const addTwoImpI = (num1,num2)=> (num1+num2)
//after => if we wrap in {},the we have to write return but if we wrap in (), then we dont have to write return.

//How can return objects
const objRet = ()=>({username:"Ankit"})
console.log(objRet());
//{ username: 'Ankit' }
