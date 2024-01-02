/*  
const accountId = 2212961018
let accountEmail = 'nirjhar@gmail.com'
var password = 23232
accountCity = "Mirpur"
let accountState;
  javascript a jodi variable declare korar pore kono value na deya hoy tahole setar output hobe undefined
  example : let accountState 
  output : undefined

  console.table([accountId, accountEmail, password, accountCity,accountState]) ; console.table will show you the result in a box
 
  -- prefer not to use var
because of issue in block scope & functional scope
*/

//--- new --//

"use strict" ; //treat all js code as newer version
// alert ( 3 + 3) ; we are using nodejs, not browser .it will work on html

/*number => 2 to the power 53 = "9007199254740992" --> highest limit
 still can be use if want to cross limit by using (bigint)
    string => ""
    boolean => true/false
    null => standalone value (Empty value)
    undefined => value yet not assigned 
    symbol => unique
    object
    typeof */

console.log(typeof undefined)
//ans : undefined
console.log (typeof null)
// ans : object
// undefined is by itself a type, called "undefined". but null is called "object" --(interview Question)


//-- conversion --//

  let score = "33"
// 2 vabe type of jana jhay
 console.log(typeof score) // ans : string ; console.log(typeof (score));  ans : string
  
 // how can we change this "string" in to a number?

 let StringIntoNumber = Number(score) // it will now convert string into Number
 console.log(typeof StringIntoNumber) //ans : number

 /* Interesting 
 what will happen if : 
 let score = "33abc" 
 let StringIntoNumber = Number(score) ?? still it will convert the string into number? lets see-
  console.log(typeof StringIntoNumber) ;   ans : number.
  But does it really converted the string into number?(including "abc")
  for knowing this, we have to console.log it...
  console.log(stringIntoNumber) ans: NaN ; means not a number .
    so this a technical fault or problem we can say in javscript
 */

  //--again---//
  let run = "100abc"
  // now what wii happen if i turn it into number like previious one? 
  let newRun = Number(run)
  console.log(typeof newRun);
  // output : it will show it is a  "number". but do we really know the converting value of number? lets console.log it
  console.log(newRun); // ans : it will show "NaN(not a  number)"  so be careful
  
  /*important 

   now  for investigative study, we can try this same method by using null.undefined,boolean,string 

  let score = "null"
  let StringIntoNumber = Number(null)
  console.log(typeof StringIntoNumber)
  //output : 0 ; considering null as 0.

    in undefined - "NaN"
    "nirjhar"(string) - NaN
    true(boolean) - "1"
  */

    /* Summary :: 
    we see that  "33" => can easily turn into number (33)
    but "33abc" will show you - NaN
    true => 1 ; false => 0 ; ""(empty string) => false
    */
    
    // another interesting try
    let isLoggedIn = 1
    let BooleanTry = Boolean(isLoggedIn) // says to convert the number into boolean (true/false)
    console.log(BooleanTry); // ans : true

    /* if we investigate this
      let isLoggedIn = "" (empty string)
      let BooleanTry = Boolean(isLoggedIn) // says to convert the number into boolean (true/false)
      console.log(BooleanTry); // ans : false

      ----

      let isLoggedIn = "nirjhar" 
      let BooleanTry = Boolean(isLoggedIn) // says to convert the number into boolean (true/false)
      console.log(BooleanTry); // ans : true

      we see that,
      1=> true ; 0=> false
      "" => false
      "nirjhar" => true
    */

      // let convert numbers into string
      let anyNumber = 75
      let stringNumber = String(anyNumber) // says to convert anyNumber into string
      console.log(stringNumber) //ans : it will show same as first (33). but really it changed into string? we can check it out by using "type of"
      console.log( typeof stringNumber) // ans : string ; so yes it is converted into string.


      // **** Operations **** //
      let value = 3
      let negValue = -value
      console.log(negValue); // output : convert it into (-3)

      let str1 = "nirjhar"
      let str2 = " is sleeping"
      console.log(str1 + str2) // ans : norjhar is sleeping
      console.log( "1" + "2") //ans : 12
      console.log( "1" + 2 + 2) //ans : 122 ; noted : eta kintu 2 + 2 = 4 keo age jog kore tarpor "1" sum korte  parto. answer supposed to be : 14
      // kintu akhon jodi ektu reverse way te kora hoy--
      console.log(2 + 2 + "1"); // ans : 41
      // what will be the output? it will show : 41 ; which said in upper line
      /* reason -- 
      because it will see first elements type, string were first , thats why showed "122" but in second one number was first & showed "41" 
      but these type of things are not preferred in javascript , it is wise to use "parenthesis ()" . like-
      console.log( (2 + 2) + "1");
      */ 
      let gameCounter = 100
      gameCounter++;
      console.log(gameCounter) // ans: 101
      // read the prefix and suffix increment documentation in MDN
