// confused comparisons

console.log(null > 0) // ans : false
console.log(null == 0); // ans : false
console.log(null <= 0); // ans : true

/* note :
comaprisons convert null to a number, treating as 0
thats why third one is true & first one is false */

console.log(undefined == 0) // ans : false
console.log(undefined < 0) // ans : false
console.log(undefined > 0) // ans : false

/* "===" is a strict check ; which checks not only values ,also data types, Ex:
also we wil see the difference between "==" & "==="  
*/
console.log("2" == 2) // ans : true ; although one is string but it check the value, which is still "2" inside string
console.log("2" === 2); // ans : false ; will not only check the value but also check the datatypes. where one is string & another one is number

//--- Data types --//
/* primitive data types (7) - strings , Number , Boolean , null , undefined , symbol , bigInt
   (Reference)Non-primitive data types - Array , objects , Functions
 */
  //primitive-data type
  const score = 100
  const scoreValue = "Poor"
  const isLoggedIn = false
  const outsideTemp = null
  let useremail; // ans : undefined
  const id = Symbol ("123");
  const anotherId = Symbol ("123") //if we pass the same value in different variable, it will not be the same.lets verify
  console.log(id === anotherId) // ans : false ; symbol is Unique
  const bigNumber = 3435234523565234234343434n // it will automatically become BigInt
  
  //Non-primitive
  const heroes = ["amir" , "Vicky" ,"Hrithik"] // array
   let myObj = {       //object
    name : "nirjhar",
    role : "student",
    age : 24
  }  

  const myFunction = function() {
    console.log("hello world")
  }

  // lets see the type of all of these 
  console.log(typeof scoreValue); // ans : number
  console.log(typeof outsideTemp); // ans : object
  console.log(typeof useremail); // ans : undefined
  console.log(typeof id); // ans : object


  //-- Memories -- //

  /* stack --primitive (strings , Number , Boolean , null , undefined , symbol , bigInt) -- gives you the copy of the original one.
  */
  let myVarsityName = "bangladesh university of professionals"
  let anotherVarsity = myVarsityName
      anotherVarsity = "University of Dhaka" 
  /* first myvarsityName equalled to anothervarsity; so now anothervarsity = bangladesh university of professionals
  then changed anotherVarsity name  to "University of Dhaka", now the question is what is the value of myVarsityName????? */
  console.log(myVarsityName); // ans: bangladesh university of profesisonals
  console.log(anotherVarsity); // Ans : university of Dhaka
  /* so why myvarsityName was not changed? it is because if you take a new variable & put previous in that variable, 
  that will not changed the previous one's value, because, it given a "copy" of that variable, original one will be the same */

   //heap memory-- non-primitive (array,objects,functions) --- gives you original & changes original one
  let nirjhar01 =  {
    email : "nirjharahmed@gmail.com",
    payment : "bkash"
  }
  let sakib01 = nirjhar01
  sakib01.email = "sakib@gmail.com" // what will happen now, if i console.log both sakib01 & nirjhar01?? will it give the same result like previous one? lets see 
   console.log(sakib01) // ans: sakib@gmail.com
   console.log(nirjhar01); // ans : sakib@gmail.com ; why this happend??
  // because stack gives you the copy not original one(Primitive Data types), whereas heaps gives you the referrence(Non-Primitive) which means it will change from original value not copied one