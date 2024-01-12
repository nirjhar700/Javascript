// -- Execution context - jei file ta apni make korsen seta run korbe kicvbe/ execute korbe kivabe. it run in 2 phases

  
/*
1. {} -- Global Execution context ("this" variable keeps inside in global execution context)
it execute inside thread. javascript is single threaded

2.Function Execution Context
3.Eval Execution context

{} -- it run in two phases. 
1.memory creation phase.
 jei variable ta declare korse setar jonno jaga allocate hoy(execute hoy na)
2.Execution phase
  executes
*/

let val1 = 10
let val2 = 5

function addNum(num1,num2) {
  let total = num1+num2
  return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,5)

/*
 first cycle
1.1st happens global execution--> this
2. Memory phase : sob variable gulo ke akotre kora hoy, allocated the place for variable(sudhu rekhe deoa hoy) 
  val1 : (undefined)--> sob variable rakha hoy & undefined dhora hoy
  val2 : undefined
  addNum : definition 
  (total function er initial phase.number execute kora hoynai but name deya hoise. addNum deya mane oikhane pura scope ta tar definition)
  result1 : undefined
  result2 : undefined

3. Execution phase
first e ekbar pura function take read kore complete korbe (first cycle), tarpor abar prothom theke shuru hobe, jeta 2nd phase
  val1 : 10
  val2 : 5
  vothers gulo value pay nai just hold kore rekhe dise,exection phase a ase tai. just execute korbe
  addNum : etar vitor to ekta function(addNum) deya . tai etar vitore ekta box create korbe. new execution . --
  New executional context : new variable environment + execution thread
  for happening new executional context now 2ta kaj abar bar repeat hobe - 1.Memory creation 2.execution (for addNum).jotobar ei function lekha hobe totobar
  now for new execution context (repeat)
  Memory Phase                          execution phase (process)
  val1 --> undefined                      num1 --> 10
  val2 --> undefined                      num2 --> 5
  total --> undefined                     total --> 15 (total ta return hoye jabe global execution context er kase)

  ------- Ei kaj pura ta akbar complete howar pore delete hoye jay (imp) ------
  now result1 = 15
  result2 = ? -- same kaj ta abar hobe


  call stack 

  function global execution context e jay, execute kore, ber hoye ashe ..
  kintu jkhon ak functioner vitore ekadhik function thake tokhon ki hoy??
  LIFO method execute hoy . (last in first out)
  */

  function one(){
    console.log("one");
    two()
  }
  function two() {
    console.log("two");
    three()
  }
 function three() {
  console.log("three");
 }

 one()
 two()
 three()  

 // ASync

 