//for each
//1st method
const coding = ["jambo","tamboo","mamboo"]
coding.forEach( function (item){
  console.log(item);
})

//2nd method
coding.forEach(greet =(i) => {
  console.log(i);
})

//3rd method
function Printme(value){
   console.log(value);
}
coding.forEach(Printme) // dont need to execute (printme()),just give the reference

// we can know value,index,array in foreach; serially will be count
coding.forEach((value,index,array)=>{
  console.log(value,index,array);
})
//multiple objects inside array, important to learn this
// accessing object inside array
const myCoding = [
  {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "java",
      languageFileName: "java"
  },
  {
      languageName: "python",
      languageFileName: "py"
  },
]

myCoding.forEach( (item) => {  
  console.log(item.languageName);
} );

/* most common operation need to know (filter)
filter requirenents


*/
const myNums =[1,2,3,4,5,6,7,8,9,0]
const NewNums = myNums.filter((num) => num > 4)
/* if you give scope({}) ,you have to return & it will be look like this
  const NewNums = myNums.filter((num) => {
    return num > 4 ; in upper method,doesnt write to return,it automatically understand but if u use {},then u have to write return
  } */
console.log(NewNums); // ans : [ 5, 6, 7, 8, 9 ]

// foreach value return korena tai, ai logic e lekhte hobe jodi foreach use kore lekhte chay
const AnotherNum=[]
myNums.forEach((num) => {
  if (num>4){
   AnotherNum.push(num) // num jodi 4 er theke boro hoy tahole sei value gulo AnotherNum e push kora hobe
  }
})
console.log(AnotherNum);
// real life using of for each
// database will give you this type of information 
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let userBooks = books.filter((bk)=> bk.genre === "Science")
// console.log(userBooks);
const userBooks=books.filter((bk)=>{return bk.publish >=1995 && bk.genre === "History"}) // 1995 er por published & genre :History .need to fullfill 2 requirements
console.log(userBooks); /* 
ans :   [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/
/* 
Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. 
Each will return a new array based on the result of the function.

The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, 
the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

Reduce
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

accumulator - the returned value of the previous iteration
currentValue - the current item in the array
index - the index of the current item
array - the original array on which reduce was called
The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.
*/
const numbers = [1,3,5,7,9,11]
const newNumbers = numbers.map((numbers)=>{ return numbers + 10})
console.log(newNumbers); 

// Reduce
const collection = [1,2,3]
/*const Total = collection.reduce((accumulator,currentValue)=>{
  console.log(`Accumulator: ${accumulator} & CurrentValue${currentValue}`);
  return accumulator+currentValue
},5(accumulator))
console.log(Total); 

ans : Accumulator: 5 & CurrentValue: 1
      Accumulator: 6 & CurrentValue: 2
      Accumulator: 8 & CurrentValue: 3
*/
const Total = collection.reduce((acc,curr) => acc+curr,2)
console.log(Total); // initial value ta nibe(1) tarpor 2 sum korbe,setar result er sathe 3 sum korbe.erpor comma diye joto dibo(2) toto add korbe

//MDN example
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
/* ans : 10
  Explanation:
  accumulator is the initial value(0),currentvalue is(1) first time operation.because whatever you give the initial value first time it goes inside accumulator
  now, first operation, accumulator:0, currentvalue:1.now totalValue :1(accumulator for next operation),& it goes on..[accuumulator dont take further value from initial value] 
  now, accumulator :1 , CurrentValue : 2, totalValue :3 (now it becomes accumulator for next operation) .. so on..after sum like that process, final will be 10, that is the answer
 */
