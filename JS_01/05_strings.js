const name = "Ankit"
const count = 50



//outdated
console.log(name + count + " Value"); //Ankit50 Value

//modern way- Also known as string interpolation(variable substitution)
console.log(`My name is ${name} and my count is ${count}`);

//string can also be declared using heap
const nameHeap = new String("AnkitHeap")
console.log(nameHeap);
//Key value pair(objects)

console.log(nameHeap[0]);//A

//How to know the prototype
console.log(nameHeap.__proto__);//{} i.e objects

//More methods
console.log(nameHeap.length);
console.log(nameHeap.toUpperCase());//ANKITHEAP
//Here original value is not changed because string is primitive data type and it is stored in stack(call by value).
console.log(nameHeap.charAt(3));//i
console.log(nameHeap.indexOf('H'));//5

const newHN = nameHeap.substring(0,5);
console.log(newHN);//Ankit i.e 5th index value is not included 

const newHNS = nameHeap.slice(-9,5);
console.log(newHNS);//Ankit
//Here we can give negative index.
//If we give negative values to substring then it will start from 0.

const inp = "    Ankit    "
console.log(inp);
console.log(inp.trim());//Ankit
//trim method removes all the white spaces before and end

const url = "ankit788pandey@gmail.com"
console.log(url.replace('788','-'));//ankit-pandey@gmail.com

console.log(url.includes('gmail'));//true

const namesp = 'ankit-pandey-313-@gmail.com'
console.log(namesp.split('-'));
//[ 'ankit', 'pandey', '313', '@gmail.com' ]













