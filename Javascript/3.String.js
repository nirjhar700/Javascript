const myName = "nirjhar"
const repoCount = "100"

console.log(`Helllo my name is ${myName} and my repocount is ${repoCount}`) // modern way to write strings in console.log -- console.log( `` ${} )
// ans : Hello my name is nirjhar and my repocount is 100

//another way to write strings
const gameName = new String("Need for speed")
/* 

In JavaScript, you can create strings using two different approaches: string literals and the String constructor.
String Literals:
The most common and straightforward way to create a string 

String Constructor:
The String constructor is a function in JavaScript that can be used to create a new String object. When you use the new String("Need for Speed") syntax,
you are creating a String object with the value "Need for Speed". However, using the String constructor to create strings is less common and not typically necessary in everyday JavaScript development.

const gameName = new String("Need for Speed");

When you use a string literal (like const gameName = "Need for Speed"), you are working with a primitive string value. This is the most common and straightforward way to handle strings.
when you use the String constructor (like gameName = new String("Need for Speed")), you are creating a String object. This means that gameName is not a primitive string, but an instance of the String object.
--Here is a bit more detail
#Primitive String:
Created using string literals ("Need for Speed").
Lightweight and optimized for performance.
Has access to various string methods and properties, but JavaScript automatically converts it to a String object when needed.

#String Object:
Created using the String constructor (new String("Need for Speed")).
Acts as an object and has its own set of methods and properties.
Generally less efficient than primitive strings.
Has its own set of behaviors that can sometimes be different from primitive strings.
*/

let b = "shivam"
console.log(b.toUpperCase()) //ans : SHIVAM ; i can make all letters capital by using UpperCase
console.log(b.toLowerCase()) //ans : shivam ; i can make all the letters small by using lowercase
console.log(b.length) // ans : 6
console.log(b.substring(1,3)); /* ans : hi ; 
This method is used to extract a portion of an array,1no index theke 3no. index er "age porjonto" kete felbe 
which means 3no index will not be included, whereas 1no index will be included [point to be noted] */
console.log(b.slice(2)) // ans: hivam ; if slice is only 2, it means from 2no index to rest of all
console.log(b.slice(1,4)) // ans : hiv ;  same as substring, but the difference is i can use negative values, which will start from reverse.lets see with example
console.log(b.slice(-4,4));
/* (shivam) last element("m") ta ke -1 dhora hobe, to jodi eta -4 porjonto jay tahole eta "i" theke shuru hobe,
 tarpor normally 4th index("v") porjonto jbe tar mane ans : "iv"
 */
console.log(b.replace("shiv" , "zandub")) //ans : zandubam ; simple, "zandub" just replacing "shiv" & answer is "zandubam"
const url = "https://www.facebook.com/nirjhar%20ahmed" 
/* sometimes someone might be mistakenly give an space inside url: https://www.facebook.com/nirjhar ahmed ; but browser doesnt understand the space then it give this (%20), so we can fic this by replace method*/
url.replace("%20","-") // ans : https://www.facebook.com/nirjhar-ahmed
console.log(b.concat(myName, "Aishwariya")) // ans : shivamnirjharAishwariya ; This method is used to combine two or more strings (same as "+" operator)
console.log(b.includes("m")); // ans : true ; checks that the variable has that element or not.
console.log(b.charAt (1)) // ans : H ; defines who is in the 1st position. (the value of index no 2; index starts from 0)
console.log(b.indexOf("i")) // ans : 2 ; defines "i"s position at which no index (reverse of CharAt)
console.log(typeof b) // ans : string ; shows the type of "b". where it is a number/boolean or string
console.log(b.startsWith("hi")) // ans : false ; it is a boolean which checks that "b" starts with hi or not
console.log(b.endsWith("vam")) //ans : true ; because it is endswith "vam"
/* -- Trim -- 
In JavaScript, the trim() method is a built-in string method that removes whitespace (spaces, tabs, and newlines) from both ends of a string. 
It does not modify the original string but instead returns a new string with the leading and trailing whitespace removed.
*/
const str = "   Hello, Nirjhar!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Outputs: "Hello, Nirjhar!"

/* Basic Syntax of Split - string.split(separator, limit);
separator: This is the character or regular expression that specifies where to split the string;konokichu ke ber kore niyashbe 
 limit : koeta word thakbe */

//  Limiting the Number of Splits
const phrase = "apple,orange,banana,grape,kiwi";
const fruits = phrase.split("n", 3);
console.log(fruits);
// Outputs: [ 'apple,ora', 'ge,ba', 'a' ] ; 

// length
let text = "Hello World!";
let length = text.length;
console.log(length); // ans : 12 ; majhkhaner space ke o count korse
/*
suppose, you have mistakenly put number into string.Now how can you make it a number? Answer is ParseInt(),let see with example
*/
let Goals = "31";
let CountingGoals=parseInt(Goals)
console.log(CountingGoals) // ans : 31

/*but there is something interesting, because ,jodi same number tai 31.33 thakto (i mean decimal sathe thakto) tahole ParseInt() korar pore sudhu 31 ee boshto
  karon ParseInt() decimal number count korena(as you know , Interger means Purnosonkha, so definitely ParseIntegar will not take decimal), so for that reason, 
  if we want to display the numvber with decimal, we have to use ParseFloat() , it will take the number with decimal.lets see it with example--
*/
let price = "99.50";
let price1number=parseFloat(price)
console.log(price1number) // ans : 99.50


/*strings cannot be changed, strings are immutable; earlier we study that strings are stack memory
 means if you re-Declare a string it gives you the copy of the orignal,not the original(because primitve datatypes are stack memory) */