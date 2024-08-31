const num = 501
console.log(num);//501

const num2 = new Number(502)
console.log(num2);//[Number: 502]

const num3 = num2.toString();
console.log(num3);//502
//After converting this into string we can use multiple methods of strings.

console.log(num2.toFixed(2));//502.00

const number = 52.8909908
console.log(number.toPrecision(3));//52.9
//toPrecision returns string

const lnum = 1000000000
console.log(lnum.toLocaleString());//1,000,000,000
//default value is US standards.
console.log(lnum.toLocaleString('en-IN'));
//1,00,00,00,000

//--------------Maths---------
console.log(Math);//Object [Math] {}
//It is a objects with multiple properties

console.log(Math.abs(-45));//45
console.log(Math.abs(45));//45

console.log(Math.round(56.3));//56
console.log(Math.round(56.7));//57

console.log(Math.ceil(46.1));//47
console.log(Math.floor(46.9));//46

console.log(Math.min(45,90,78,5,1));//1
console.log(Math.max(45,90,78,5,1));//90


console.log(Math.random());//0.9588592000172502
//math.random values always occur between 0 to 1


const min = 10
const max = 20

//now give the values between 10 and 20

console.log(Math.floor(Math.random()*(max-min+1))+min);











