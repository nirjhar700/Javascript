//Basic for loop
let MyArray = ["flash","batman","supperman"]
console.log(MyArray.length);

for (let index = 0; index <MyArray.length; index++){
  const element = MyArray[index]
  console.log(element);
}

// --for loop with if condition-- ///
for (let i= 1; i <=10; i++){
    const element =i;
    //console.log(i); 
    // element ta jodi 5 er equal hoye jabe,tokhon show korbe "5 is best number". 
    // ques thakte pare je keno 1 theke 5 porjonto jaoar pore "5 is the best number" show koreni,direct keno "5 .. number " dekhalo? karon console.log kora hoyni
    if(element == 5){ 
     console.log("5 is best number"); // ans : 5 is best number
     //console.log((i + "*" + j + "=" + i * j));
    }
   }
       //break and continue
    // if the loop detected 5, it will stop increment
for (let index = 1; index <= 20; index++){
    if (index == 5){ //jkhon e 5 detect korbe tokhon e loop theke ber hoye ashbe
      console.log(`detected 5`);
      break // continue(skip) :?? ans : it will print all accept 5. continue says if there is detected 5,it will skip 5 & print rest of all but break stops 
    }
    console.log(`value of 1 is ${index}`); 
  }
  /*
    value of 1 is 1
    value of 1 is 2
    value of 1 is 3
    value of 1 is 4
    detected 5
  */

    // looop inside loop //
for (let i= 1; i <3; i++){
    console.log(`outer loop value : ${i}`);
   for (let j = 1; j<=3; j++){
    //console.log(i + "*" + j + "=" + i*j);
    console.log(`inner loop value ${j} and inner loop ${i} `)
   }
    }
    /* 
    outer loop value : 1
    inner loop value 1 and inner loop 1 
    inner loop value 2 and inner loop 1 
    inner loop value 3 and inner loop 1 
    outer loop value : 2
    inner loop value 1 and inner loop 2 
    inner loop value 2 and inner loop 2 
    inner loop value 3 and inner loop 2 
    eta first e i er condtion check korbe then ekbar print kore niche jabe,nicher condition check korbe, 3porjonto (sobgula) print korbe karon er niche ar kono loop nai,
     kintu j loop ta i loop keo print korte parbe karon (hitesh theory: choto ra boroder theke ice cream chinaya nite pare kintu boro ra parena)
    */


/* while loop 
  while loop declare korar jonno ja ja lagbe 
step:1.loop variable outside while (let index = 0)
  2.condition inside while (index <3)
  3.loop body (console.log jeta)
  4.change the loop variable (index++) 
 */

let index = 0 // while e variable ta baire declare korte hoy ar for-loop er vitorei declare kora hoy
while (index <= 5){
  console.log(`value of index is ${index}`);
   index = index + 2
}
/*
ans : value of index is 0
      value of index is 2
      value of index is 4 (incrementing +2 because index = index +2)
 */
//array in while loops
let myArray = ["Hulk" , "Power-Rangers" , "Tarzan"]
let arrow  = 0
while (arrow <myArray.length ) {
  console.log(`value is ${myArray[arrow]}`);
  arrow++
} 
//ans : value is Hulk,value is power-rangers,value is Tarzan

/* do-while loop speciality 
step:1.loop variable outside while (let score = 11)
2.loop body (console.log jeta)
3.Change the loop variable (index++)
4.condition outside the do-while (index <5)
*/
let score = 6
do{
  console.log(`score is ${score}`);
  score++
} while(score<=5)// ans : score is 11 ; do while loop condition match na korleo ekbar holeo print korbe,karon d-w-loop condition check korar age c.log kore

// for of loop (specialized for array)
const arr = [1,2,3,4,5]
for (const index of arr) {
  console.log(index)};  // ans : 1 2 3 4 5

//for of loop with strings
const greetings ="Helllo"
for (const i of greetings) { // (++) esob deya lage na
  console.log(`each char is ${i}`)};
  /* for of loop alada alada single line e ekekta element dekhay.. ans hobe :
  each char is h 
  each char is e   
  each char is l   
  and so on...
  */

  // Map (it is like object)
  const map = new Map() 
  map.set('IN' , "India")  // IN(key) , India(value) ; first one key,second one value
  map.set('UK' , "United Kingdom") 
  map.set('Arg' , "Argentina") 
  //  map.set('IN' , "India")
  /* suppose i want the same value pairs & write in 4th line, it will not print this again
     maps is known for its unique value
  */
  console.log(map);
  /* ans : Map(3) {
    'IN' => 'India',
    'UK' => 'United Kingdom',
    'Arg' => 'Argentina'
  } 
  -- we use map for making a  new array
  -- we use foreach for doing a operation
  */
  
  
  /*for (const key of map) {
    console.log(key);
  } 
  ans : [ 'IN', 'India' ]
        [ 'UK', 'United Kingdom' ]
        [ 'Arg', 'Argentina' ]  ; it is showing in array,we dont want it as an array what to do now?
  */
// fixing for remove the array
  for (const [key,value] of map) {
    console.log(key,':',value);
  } // you can call it destructuring
  /* 
ans:  IN : India
      UK : United Kingdom
      Arg : Argentina
  */

/* As it same like object, will for of loop work in object? lets see it  
  const myObject ={
  game1 : "House of Dead",
  game2 : "Road Rush",
  game3 : "GTA Vice city"
}
for (const [key,value] of myObject) {
  console.log(key,value);
} ; ans : myobject is not iterable , Objects are iterable in for-in loop 
*/

const myObject ={
  game1 : "House of Dead",
  game2 : "Road Rush",
  game3 : "GTA Vice city",
  game4 : '8 Ball Pool'
}

for (const key in myObject) {
 console.log(`${key} is for ${myObject[key]}`);
} // 1st key ta game1,game2 guloke bujhano hoyse ar 2nd key ta object er value bujhano hoise

  //for-in loop in Array
  const programming = ["js","rb", "java" , "cpp"]
  for (const key in programming) {
   // console.log(key); this key shows the index number 0 1 2 3
    console.log(programming[key]); // ans : js , rb , java , cpp
    }


 