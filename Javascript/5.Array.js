/* Array -- JavaScript arrays are resizable and can contain a mix of different data types. 
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — 
and the last element is at the value of the array's length property minus 1.
important :
JavaScript array-copy operations create shallow copies. (interview Question)
shallow copies (heap memory): A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
deep copies (Stack memory) : A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result,
 when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy. 
*/
// Array methods
let G = [15,75,90,5]
console.log(G.includes(15)); // ans : true ; checking that a element is have inside of array or not
console.log(G.indexOf(90)); // ans : 2 ; index no starts with 0
console.log(G.pop()) // ans : 5 ; it will return the last element of the array,last element ta ber kore felbe
console.log(G) // ans : [15,75,90]
console.log(G.push(10)) // ans : [15,75,90,10] ; adding an element at the end
console.log(G.shift()) // ans : [15] ; return the first element of the array,first element ta ber kore felbe
console.log(G.unshift("Nirjhar")) // ans : ["Nirjhar", 15,75,90,10] ; adding an element in front of the array
delete G[3] // deleting an element from array
console.log(G) // ans : ["Nirjhar",75,90, empty]
const newArr = G.join()
console.log(newArr); // ans : 15,75,90,5
console.log(typeof newArr); // ans : String
/* --join--
Adds all the elements of an array into a string, separated by the specified separator string.
@param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
 */

/* slice & splice (important)
  (interview question)
*/
//slice
console.log(G.slice(1,3)); // ans : 75,90 ; 1st index theke 3rd index er ag porjonto kete felbe.3no index nibe na
//splice
let D =[100,200,98,65]
console.log(D.splice(1,3)); // ans : 200,98,65; 
/* splice 3rd index shoho ney but slice ney na, but etai main difference na ,ekhane onek boro ekta difference ase jeta obbossoi mone rakhte hobe.
   Amra jodi slice ar splice kora variable gulor console.log kori--
    console.log(G); ans: [ 15, 75, 90, 5 ] (slice)
    console.log(D); ans: [ 100 ] (splice)
    slice original array er khoti na kore shetar akta copy niye slice koreche(stack memory)
    splice original array er theke element gulo directly alada kore feleche(heap memory) -- eitai big reason.need to acknowledge
*/
const BNP = ["Zia","Ishrak","Fakhrul"]
const leaders = ["andaleeve","Elias","Pinaki"]
//what happens if we push the "leaders" into "BNP"? let see -
BNP.push(leaders)
console.log(BNP);
// ans : [ 'Zia', 'Ishrak', 'Fakhrul', [ 'andaleeve', 'Elias', 'Pinaki' ] ] ; it takes array inside an array
const allHeroes =BNP.concat(leaders)
console.log(allHeroes) // ans : [ 'Zia', 'Ishrak', 'Fakhrul', 'andaleeve', 'Elias', 'Pinaki' ]

// another way to sum the arrays. called spread (preferable)
console.log([...BNP, ...leaders]); // ans : [ 'Zia', 'Ishrak', 'Fakhrul', 'andaleeve', 'Elias', 'Pinaki' ]

//sub arrays in to normal arrays
const anArrray = [1,3,5,[10,15,20],7,[25,15,[30,35]]]
const fixArray = anArrray.flat(Infinity)
/*ans : [
   1, 3,  5, 10, 15,
   20, 7, 25, 15, 30,
   35
 ]  ; Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.*/

 //asking the element is array or not
 console.log(Array.isArray("Hitesh")); // false
 //Convert this string in to array
 console.log(Array.from("hitesh")); // ans [ 'h', 'i', 't', 'e', 's', 'h' ] ; Creates an array from an array-like object.

 // adding multiple elements in array
 let score1 = 400
 let score2 = 600
 let score3 = 800
 console.log(Array.of(score1,score2,score3)); // ans :  ; Returns a new array from a set of elements.