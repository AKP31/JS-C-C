const ind = ["Virat","Bumrah","Rohit"]
const aus = ["Head","Cummins","Maxwell"]

ind.push(aus)
console.log(ind);
//[ 'Virat', 'Bumrah', 'Rohit', [ 'Head', 'Cummins', 'Maxwell' ] ]
//Array within array
//Array can take any type of data

console.log(ind[3]);
//[ 'Head', 'Cummins', 'Maxwell' ]


console.log(aus);

const bomb = aus.concat(ind)
console.log(bomb);
/*[
    'Head',
    'Cummins',
    'Maxwell',
    'Virat',
    'Bumrah',
    'Rohit',
    [ 'Head', 'Cummins', 'Maxwell' ]
  ]
*/
//concat returns new array and merge the two array

//spread operator

const bomb2 = [...ind, ...aus]
console.log(bomb2);// same result as concat

const lengthy = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const easy = lengthy.flat(Infinity)
//flat returns new array with all sub array elements concatenated
console.log(easy);
/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

console.log(Array.isArray("Ankit"));//false
console.log(Array.from("Ankit"));
//[ 'A', 'n', 'k', 'i', 't' ]

//Interesting scene
console.log(Array.from({name : "Ankit"}));//[]

const a =100
const b = 200
const c = 300

console.log(Array.of(a,b,c));
//"of" Returns a new array from a set of elements.


