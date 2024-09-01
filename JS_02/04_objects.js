// const instaUser = new Object() //Singleton Object
const instaUser = {}//same as above. Non-Singleton Object
// console.log(instaUser);
//{} i.e empty user

//assigning values
instaUser.id = "123abc"
instaUser.name = "Ankit"
instaUser.isLoggedIn = false

// console.log(instaUser);
//{ id: '123abc', name: 'Ankit', isLoggedIn: false }

//Nested objects

const mainUser= {
    fullname : {
        userFullName : {
            firstName : "Ankit",
            lastname : "Pandey"
        }
    }
}

console.log(mainUser.fullname.userFullName.firstName);
//Ankit

//Combining objects

const myObj1 = {
    a:1,
    b:2
}
const myObj2 = {
    c:3,
    d:4
}

const obj3 = {myObj1,myObj2}
console.log(obj3);
//{ myObj1: { a: 1, b: 2 }, myObj2: { c: 3, d: 4 } }
//object inside object

const obj4 = Object.assign({},myObj1,myObj2)
console.log(obj4);
//{ a: 1, b: 2, c: 3, d: 4 }

//using spread operator
const obj5 = {...myObj1,...myObj2}
console.log(obj5);
//{ a: 1, b: 2, c: 3, d: 4 }

//data recieved by database
const rec = [
    {
        id1 : "123abc",
        email : "akp@gmail.com"
    },
    {
        id2 : "456abc",
        email : "akp1@gmail.com"
    },
    {
        id3 : "789abc",
        email : "akp2@gmail.com"
    }
]

console.log(rec[1].email);//akp1@gmail.com

console.log(instaUser);
console.log(Object.keys(instaUser));
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser));
//[ '123abc', 'Ankit', false ]
console.log(Object.entries(instaUser));
//[ [ 'id', '123abc' ], [ 'name', 'Ankit' ], [ 'isLoggedIn', false ] ]
console.log(instaUser.hasOwnProperty('isLoggedIn'));//true
console.log(instaUser.hasOwnProperty('isLogged'));//false

//Object de-structuring
const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "Hitesh"
}

console.log(course.courseInstructor);
//Hitesh

const {courseInstructor} = course
console.log(courseInstructor);//Hitesh

const {courseInstructor:inst} = course
console.log(inst);//Hitesh

//JSON(Javascript Object Notation)
//used for API calling
//getting response for backend
//structuring
/*{
    "name":"ankit",
    "courseName":"java",
    "price":"3455"
    "age": 21,
    "isAdult":true
} */
//also we get value in this format also from API

//[{},{},{}]








