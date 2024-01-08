const score =  100
if (score>50){
  const power = "fly"
  console.log(`power of the user : ${power}`);
}
/*if we do same console log in the outside of this scope, jpkhpn curly braces deya hpy tokhon er alada ekta scope count kora hoy ebong sei scope er value gulo sudu oi scope er vitor theke access kora jay,
kintu ekhanei ache var ar const/let er tofat, karon var diye jodi ei same scope ta banano hoto tahole baire thekeo access kora jeto, jeta global scope, seta howa jabena,code scope er baire jaoa jabena ,tahole code safe thakbe */
console.log(`power of the user : ${"power"}`); // ans : error; because 

/*--Arithmetic Operators--
"%" = Modulas; gives you the remainder(vagsesh). like : 10 % 3 = 1 
"**" = Exponentiation ; it is a square. like 17 ** 2 = 289
"++" = increment
"--" = decrement */
/*  Assignment Operators--
 += : increment assignment operator .it is like adding with existing; x += y (means x = x + y) 
 same goes for : "-=" , "*=" , " /= " 

 /* Comparison Operators
 == equal to
 != not equal
 === equal value of type -- lets see with examples
  normally 
 !== not equal value or not equal type
 < greater than 
 > less than 
 =< greater than or equal to 
 >= less than or equal to 
 */

 /*
  && = both conditions need to accomplish
  || = one of the two conditions need to acconplish
  ! = none of the conditions fullfills  */

//shorthand
const balance = 1000
if (balance>999) console.log("test");

//multiple conditions

if (balance<500){
  console.log("less than");

}
else if(balance<750){
  console.log("less than 750");
}
else if(balance<990){
  console.log("less than 750");
}
else{
  console.log("any of these are not correct");
}

// real life examples
const userLoggedIn = true  
const debitCard = true
// user er logged in thakte hobe abong debit card thakte hobe
if(userLoggedIn && debitCard ){
  console.log("alllow to buy courses");
}
// google account or email account thakte hobe
const loggedInFromGoogle= false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail){
  console.log("user logged in");
}


/*--- switch in Js ----
sometimes values needed to checking in multiple times , than the concept came switch
Use the switch statement to select one of many code blocks to be executed.

switch(expression) {
  case x:
     code block
    break;
  case y:
     code block
    break;
  default:
     code block
}


The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/

let month = 3
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break; // jekhane key match hoy sekhaner sob code execute hoye jay(except default),, kintu break thakle porer code gulo ar match e korena,oikhanei break hoye jay
  case 4:
    console.log("april");
    break; 

  default:
    console.log("default match");
    break;
}
// what happened if it was string? lets see it
let Month = "april"
switch (Month) {
  case "jan":
    console.log("january");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
    case "april":
    console.log("april");
    break; 

  default:
    console.log("default match");
    break;
}

//truthy

const userEmail = []

if (userEmail){
  console.log("got your user email");
}
else{ console.log("dont have the email");}
/*
 ans : got your user email; it is assuming that userEmail is true because there is nothing assigned in the condition with email, its called truthy.
 if you give UserEmail= () , it will still assume true & print it , are all type of elements will assuming true? or there is a rule? there are some fixed values which are falsy values--
falsy values
false , 0 , -0 , bigInt 0n, "" , null , undefined , NaN
accept these, all will be assuming true 
there are some intersting truthy values :: "0", "false", " ",[],{} ,function(){} ; they are counted truthy because they are inside string
*/

// array checking system; there is no element inside array so length is 0. now we will check it in this process
if (userEmail.length === 0){
  console.log(("array is empty"));
}

//object checking system
//  object er key gulo console.log korle array er moddhe dekhay,tai object er key gulo samevabe er length ber korte hoy,
const emptyObj ={}
if (Object.keys(emptyObj).length===0){
  console.log("object is empty"); 
} 

/* need to acknowledge
false == 0 ; true
false == "" ; true
0 == "" ; true
*/

// Nullish Coalescing Operator(??) : null undefined

let val1 ;
// val1 = 5 ?? 10 ; ans : 5 ; database or firebase e kaj korar somoy 2 ta value show korte pare, onek somoy dekha jete pare null response aste pare, othoba kono response e na aste pare,undefined ese pore 
val1 = null ?? 10 
console.log(val1); // ans : 10 ; ager tay prothom value 5 asche sei hisabe to ekhane null ashar kotha ans but ans asche 10 karon safety r jonno jate browser e problem na hoy se karone alternate value diye dibe null thakle

//terniary operator : Harry
// condtion ? true : false 
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
//ans : less than 80 ; condtion ta false hole 2nd console log e dhuke jeto

 //Ternary Operator : Harry
 let a = 6
 let b = 8
 let c = a > b ? (a - b)  : (b - a);
 /* Explanation
   a(6) jodi b(8) er theke boro hoy tahole (a-b) er result dekhabe ,eta true na hole (b-a) er result dekhabe
 */

  /* Ternary operator
    The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?),
    then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. 
    This operator is frequently used as an alternative to an if...else statement. */

    let Bus = 10
    let truck = 5
    let road = Bus > truck ? ("truck will go slowly") : ("truck will go fast ");
    console.log(road) //ans : truck will go slowly
    /* jodi bus(10) truck(5) er cheye besi hoy tokhon ki hobe? truck will go fast . kintu "Bus(10) < truck(5)" thakle ans hoto "truck will go fast" karon statement ta vul
     1st ta (truck will go slowly) "if" er kaj kore & 2nd(truck will go fast) "else er kaj kore" */