const accId = 564000
let accEmail = "ankitpnp@gmail.com"
var accPass = "345234"
accCity = "Kolkata"
let accState;
// if not assigned then the output will be "undefined"

// In the initial days , JS had a problem - It was working on the basis of scope(Block Scope)
// So prefer not to use var because of the isuue of block scope and function scope.

// accId = 67899    ->> Not allowed. Const value cant be changed
console.table([accId,accPass,accEmail,accCity,accState]);
