//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

const myDate = new Date();
console.log(myDate);//2024-08-31T16:00:41.759Z

console.log(myDate.toString());
//Sat Aug 31 2024 16:01:33 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sat Aug 31 2024
console.log(myDate.toLocaleDateString());//8/31/2024

console.log(typeof myDate);//object


const saveDate = new Date(23,0,27)
console.log(saveDate);
//1923-01-27T00:00:00.000Z
console.log(saveDate.toDateString());
//Sat Jan 27 1923

const saveDate2 = new Date(23,0,27,0,8)
console.log(saveDate2.toLocaleString());
//1/27/1923, 12:08:00 AM

const myDate3 = new Date("2024-03-31")
console.log(myDate3.toLocaleString());
//3/31/2024, 12:00:00 AM

const myDate4 = new Date("03-31-2024")
console.log(myDate4.toLocaleString());
// 3/31/2024, 12:00:00 AM


//timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);//1725121473103
//this is the value in milli sec from the starting date 1970, January 1

//If we want into seconds , then
console.log(Math.floor(Date.now()/1000));//1725121818





console.log(saveDate2.getTime());
//-1480981920000


//More methods of Dates
const ndate = new Date();

console.log(ndate.getMonth());//7
//7th month starting from 0
console.log(ndate.getDay());//6

console.log(ndate.toLocaleString('default',{
    weekday : "long"
}));//Saturday











