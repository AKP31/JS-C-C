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

