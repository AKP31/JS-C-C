//There is no problem with same data type conversion.

//while comparing make sure that both datatypes are of same type. Also, in typescript this different datatypes comparison are not allowed.

console.log("2">1);//true
console.log("02">1);//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//false

//the reason is comparison(>,<,>=) and equality(==) works diffrently. Comparision converts null to number as 0. that's why null>0 is false and null >= 0 is true.

console.log(undefined > 0); //false 
console.log(undefined < 0); //false
console.log(undefined == 0); //false

//strict check(===)
console.log("2"==2);//true
console.log("2"===2);//false



