//function defeinition

function name(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

//reference => name
//execute => name()
// name()

function addTwoNum(num1,num2){
    console.log(num1 + num2);
}
addTwoNum(21,4)//25

//problem arises if we dont give number as input
addTwoNum(23,"4")//234
addTwoNum(34,"a")//34a
addTwoNum(4,null)//4
//internal conversion takes place and give us the result which is not consistent.

//parameters:-while definition i.e num1, num2
//arguments :- while calling the function i.e 21,4

function addTwo(num1,num2){
    let res = num1 + num2
    return res
    console.log("Ankit");//unreachable code
}
const res = addTwo(24,25);
console.log("Result : ",res);

addTwo(24,5)//Result :  49

function userLoggedIn(username){
    return `${username} just logged in`
}

console.log(userLoggedIn("Ankit"));
//Ankit just logged in
console.log(userLoggedIn());
//undefined just logged in

//so to solve this problem we use control if else
function userLoggedIn(username){
    if(username===undefined){
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}

//another way
function userLoggedIn(username){
    if(!undefined){
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}

//or we can give default value.

function userLoggedIn(username="Guest"){
    if(!undefined){
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}
console.log(userLoggedIn("Ankit"));
//Ankit just logged in, here value is override
console.log(userLoggedIn());
//Guest just logged in

//Shopping cart scene
function calculateCartPrice(num){
    return num
}

console.log(calculateCartPrice(24));//24
console.log(calculateCartPrice(24,45,67,4));//24
//In this case only first argument gets printed.

//Rest operator
function calculateCartPriceN(...num){
    return num
}
console.log(calculateCartPriceN(23,56,45,89,78));
//[ 23, 56, 45, 89, 78 ]

const user={
    name:"Ankit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

//handleObject(user)

handleObject({
    name: "Vishal",
    price: 345
})


const arr =[20,45,78,56]

function getSecondElement(inputArray){
    return inputArray[1]
}

console.log(getSecondElement(arr));//45

console.log(getSecondElement([200,67,78]));//67

