const mySym = Symbol("key1")
const JsUser = {
    name: "Nirjhar",
    "full name": "nirjhar ahmed",
    [mySym]: "key1",
    //mySym : "Key1" ; not applicable
    age: 22,
    location: "Dhaka",
    email: "nirjhar@google.com",
    isLoggedIN: false,
    lastLogginDays: ["Monday", "Satuday"]
}
console.log(typeof [mySym]); // ans : object
// console.log(JsUser)
/*
{
 name: 'Nirjhar',
 'full name': 'nirjhar ahmed',
 age: 22,
 location: 'Dhaka',
 email: 'nirjhar@google.com',
 isLoggedIN: false,
 lastLogginDays: [ 'Monday', 'Satuday' ],
 [Symbol(key1)]: 'key1' ; it is showing like this because this is how symbol looks like
}
*/

/* How can we define a symbol? (interview question)
first you have to declare a symbol outside the object
in terms of giving "symbol" in the object, you should give "[]" 3rd bracket( mySym : "Key1" ; not applicable, correct one is : [Symbol(key1)]: 'key1'; ) 
& when you want to know the property value of this prorperty you have to console.log it like this - console.log(JsUser[mySym]) ; ans : key1
 */

/* talking more about symbol
if i wrote that symbol like this- 
mySym : "key1" ; if we do - console.log(JsUser.mySym); ans : undefined
console.log(JsUser.mySym) ; ans : key1 ; but does it really take "mySym" as a symbol? lets check the DataType
console.log(typeof JsUser.mySym) ; ans : string
if we want to use this property as a symbol , we have to use "[]",so lets see that again
[mySym] : "key1"
console.log(typeof JsUser.mySym) ; ans ; object
 */

// you can change or overwrite values by using dot (.)
JsUser.location="Mirpur"
console.log(JsUser.location); // ans : Mirpur
/* you can freeze or stuck the object; then it won't change or overwrite
Object.freeze(JsUser)
JsUser.location="Dhanmondi"
console.log(JsUser); ans : will not change into dhanmondi because its freeze now(locked) */ 

//accessing object with a function
JsUser.greeting = function(){ 
    console.log("Hello nirjhar");
  }
  console.log(JsUser.greeting());
// string interpolation & 'this'
JsUser.greetingTwo = function(){
console.log(`Hello nirjhar, ${this.age}` );
 }
 console.log(JsUser.greetingTwo()); 
 /* ans : Hello nirjhar, 18 ; for referring same object, we use 'this'.note that you have to give "greetingTwo()", 
 if you give  console.log(JsUser.greetingTwo); ans : [Function (anonymous)] (function doesnt executed,just reference comes)
*/
//----- 2nd Part -----//

// const tinderUser = new Object()  single ton object
const tinderUser = {}  //non-single ton object
// there is nothing inside the object, we will Insert keys & values in object in this method
tinderUser.id="nirjhar01"
tinderUser.name = "nirjharAhmed"
tinderUser.isLoggedOut = true
console.log(tinderUser); // ans : { id: 'nirjhar01', name: 'nirjharAhmed', isLoggedOut: true }
console.log(Object.keys(tinderUser)); // ans : [ 'id', 'name', 'isLoggedOut' ] ;important to see the data type. its an array, in projects, you have to loop through arrays
console.log(Object.values(tinderUser)); // ans : [ 'nirjhar01', 'nirjharAhmed', true ]
console.log(Object.entries(tinderUser));
 /*ans : [ 'id', 'nirjhar01' ],[ 'name', 'nirjharAhmed' ],[ 'isLoggedOut', true ] ; 
 first one will be key and second one will be value converts all key and values separately  into an array &  inside another (parent) array. */
console.log(tinderUser.hasOwnProperty("isLoggedOut")); 
// ans : true ; Determines whether an object has a property with the specified name.[Note: it only checks the "keys",not "values"], in array, we use "includes"

// inserting object into object
const regularUser ={
    email : "nirjhar1232gmail.com",
    fullName : {
      userFullName : {
        firstName : "hitesh",
        lastName : 'ahmed'
      }
  
    }
  }
  //we can access the object inside the object by--
  console.log(regularUser.fullName.userFullName.firstName); // ans : hitesh
  console.log(regularUser); /* ans :
    {
  email: 'nirjhar1232gmail.com',
  fullName: { userFullName: { firstName: 'hitesh', lastName: 'ahmed' } }
} */

//assigning object/merging object 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({}, target, source); 
/* "{}" is optional parameter, considering first one {} as a target & rest all of them are source
 sources are going to target object, now target & returnedTarget are same
The Object.assign() static method copies all enumerable own properties 
from one or more source objects to a target object. It returns the modified target object.
*/
console.log(returnedTarget); // ans : { a: 1, b: 4, c: 5 }
console.log(target);
/* ans : { a: 1, b: 4, c: 5 }
Properties in the target object are overwritten by properties in the sources if they have the same key.
 Later sources' properties overwrite earlier ones.
*/
console.log(returnedTarget === target);
// ans: true  
console.log(returnedTarget); // ans : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Another mehtod for assigningObject(most preferable one)
const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "c", 3: "d"}
const obj3 = {...obj1, ...obj2}
console.log(obj3); // ans: { '1': 'a', '2': 'c', '3': 'd' }


//--- 3rd Part ---//

// Destructuring

const course = {
    courseName: "Js in hindi",
    fee : "1000",
    instructor : "Hitesh"
  }
  const {instructor} = course
  console.log(instructor); // ans : Hitesh
  /* 
  it is one kind of structuring code more nicely
  suppose you need to run the "instructor" 5times, so will you every time write console.log(course.instructor)?
  but instead of this,  if we write, const {instructor} = course ; then will set automatically "console.log(course.instructor) = instructor"
  also you can rewrite them --
  const {instructor : teacher} = course 
  console.log(teacher); ans : Hitesh
  now if you. console.log(instructor); ans : instructor is not defined
  [note that when you c.log it in a single way,then it's sayng teacher = hitesh, but if you call the full object ("course") then it is not changed the instructor to teacher
   so that means it took the copy ,not original one. remember that we know that Non-primitve data types are heap memory(took the copy not original one)]
  */

   /*  
   JSON Structure - Same as Object just without variable name
   
{  
    courseName: "Js in hindi",
    fee : "1000",
    instructor : "Hitesh" 
  }

   */