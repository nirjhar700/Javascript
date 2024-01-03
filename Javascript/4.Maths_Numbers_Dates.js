// numbers & maths
const score = 400
console.log(score); // ans : 400
const balance = new Number(100) // ans : [Number : 100] ; it is the surity of output to get number
console.log(balance);
console.log(balance.toString().length); // ans : 3 ; converted it into string & now want to know the length
console.log(balance.toFixed(2)); // ans : 100.00 ; it will give you extra two decimal numbers (00).

const otherNum = 21.454 
console.log(otherNum.toPrecision(3)); // 3 means it will take up to 3 number & make it precise. ans : 21.5 ; it must be in the range 1-21,inclusive ; it returns a string
const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")); // ans : 10,00,000 ; converts number into string & gave the comma 
// Number can give you -Number.MIN_VALUE, Number.MAX_VALUE, Number.MAX_SAFE_INTEGER

/* ** Maths** */
 
console.log((Math.abs(-4))); // ans : 4 ; it converts negative value into positive value.
console.log(Math.round(4.3)) // ans : 4 ; it gives a round value ; but if its above 4.5 then it would take 5 , but its under 4.5 it will take 4. but if it's correctly 4.5 then it will show the ans 5.
//but you can manually control that value will take upper one or lower one by using "ceil" , "floor".
console.log(Math.ceil(4.2)); // ans : 5 ; ceil means top, so if it is slightly been above of the 4 it will take 5.
console.log(Math.floor(4.8)); // ans : 4 ; floor means it will take the lower value of 4 ,even if its 4.9.
console.log(Math.min(10,28,27,40,9)); // ans : 9 ;  min means it will take minimum value
console.log(Math.max(45,90,105.30)); // ans : 105 ; means it will take  maximum value 


console.log(Math.random()); // it will give a random value ,its between 0 to 1

console.log(Math.floor(Math.random()*10) +1); // there will be a range , if making a dice, it will take 1 to 6. so there is a risk of getting "0" so for safety adding (+1), so there is no chance of getting result of 0
//tricks defining min and max
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min )


//-- dates -- //

let myDate = new Date()
console.log(myDate); // ans : 2023-12-18T07:33:53.573Z ; its so vague, we can convert it into string
console.log(myDate.toString()); // ans : Mon Dec 18 2023 13:35:07 GMT+0600 (Bangladesh Standard Time) ; now readable. there are similar strings like this. these are--
console.log(myDate.toDateString()); // ans : Mon Dec 18 2023
console.log(myDate.toLocaleTimeString()); // ans : 1:37:15 PM ; it says the current time
console.log(typeof myDate); // ans : object (interview question)

//specific date //
let myCreatedDate = new Date(2023, 0, 23)// yy-mm-dd format
// console.log(myCreatedDate); it will show some vague result after console.log,so we will convert it into string
console.log(myCreatedDate.toString()); // ans : Mon Jan 23 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)
console.log(myCreatedDate.toLocaleString()); // ans : 1/23/2023, 12:00:00 AM

let myCreatedDate2 = new Date("07-14-2023")// mm-yy-dd format -- preferable in India
console.log(myCreatedDate2.toString()); // ans : Fri Jul 14 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)

let myTimeStamp = Date.now() // now -- Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC)
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // ans: getTime will give you exact value not vague like 38th line
console.log(Date.now()/1000); //ans :1702894998.495  if we want to turn in into second than we need to divide with 10000,but decimal comes.. we know the tricks to make it integer
console.log(Math.floor(Date.now()/1000)); // ans : 1702895101

let newDate = new Date()
console.log(newDate); // ans : 2023-12-18T10:27:21.509Z2023-12-18T10:27:21.509Z
console.log(newDate.getMonth()); // ans : 11 -- month starts form 0, means 0 = january so 11 = december
newDate.toLocaleString("default", {
  weekday : "long"
})
