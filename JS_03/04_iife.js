//Immediately Invoked Function Expression(IIFE)
//Syntax => (//function definiton)(//function execution)

//This is named IIFE
(function connection(){
    console.log("DB connected");
})();
//DB connected
//Dont forget to put ; after IIFE, else it will give error if we declare more IIFE

//Why IIFE?
//There are many times , when problem occurs due to pollution of global scope. So, to conquer this issue, we use IIFE.(i.e to remove global scope variables and declarations pollution)

//This is simple IIFE
(()=>{
    console.log("DB Two connected");
    
})();
//DB Two connected

((name)=>{
    console.log(`My name is ${name}`);
    
})("Ankit")
//My name is Ankit