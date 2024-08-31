//array

const arr = [0,1,2,3,4,5]
const hero = ["Virat","Rohit","Dhoni"]
//another way of creating array

const arr2 = new Array(1,2,3,4,5)
//elements in array can be of same type as well as different type
//JS arrays are resizable
//Array elements cannot be acessed using arbitrary strings as indices i.e arr["h"] cannot be accessed.
//JS array copy operations creates shallow copies.
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//As a result, when you change either the source or the copy, you may also cause the other object to change too.
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

console.log(arr[3]);//3

//Methods in array
arr.push(6);
console.log(arr); //6 is added as a element
arr.pop();//last element from array is removed

arr.unshift(9);
//9 is inserted in the begining of array due to which all array indices are shifted. In case of large number of elements, it becomes very time consuming operation.
arr.shift();
//removes the first element of the array
console.log(arr);

console.log(arr.includes(9));//false
console.log(arr.indexOf(3));//3
//Incase of invalid number, index gives -1


const newArr = arr.join();
console.log(arr);//[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);//0,1,2,3,4,5
console.log(typeof newArr);//string
//After join operation, values are converted into string 

//slice, splice

console.log("A",arr);
//A [ 0, 1, 2, 3, 4, 5 ]

const marr = arr.slice(1,3);
//3rd index is not included

console.log(marr);
//[ 1, 2 ]

console.log("B",arr);
//B [ 0, 1, 2, 3, 4, 5 ]

const marr1 = arr.splice(1,3);
// 3rd is included and also it manipulates the original array.

console.log(marr1);//[ 1, 2, 3 ]

console.log("C",arr);//C [ 0, 4, 5 ]
















