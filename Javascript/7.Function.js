/* 
function is like you wrote 10/20 line code & now wrap them in a pack

*/
function addTwonumbers(number1, number2){
    /* let result = number1 + number2
       return result  (you can write this or below one))*/
    return (number1 + number2) // after giving return,no function will work which is below of return
}

let keepingNumbers= addTwonumbers(5,6)
console.log("result : ", keepingNumbers) // ans : result : 8

/* Acknowledging return closely 

function addTwonumbers(number1, number2){
        
    console.log (number1 + number2)
}

let keepingNumbers= addTwonumbers(5,6); ans : 11
console.log("result : ", keepingNumbers); ans : 'result : undefined'
so the question is, when we call the function it shown the result,but when we print it, it shows undefined.
why is this? because we didnot give "return" . return stores the value that in future it can be print. so correct one will be-
    
    function addTwonumbers(number1, number2){  
        return (number1 + number2)
    }
    let keepingNumbers= addTwonumbers(5,6); (5,6 are arguements, number1,number2 are parameters)
    console.log("result : ", keepingNumbers) // ans : result : 8

*/

function loginUserMessage  (username){
if (username === undefined){
console.log("please enter a username");
}
return  console.log(username, "just logged in");
}
loginUserMessage("nirjhar"); // ans : nirjhar just logged in

/* loginUserMessage(); ans : please enter a username
loginUserMessage(); ans : undefined. (interview question)
 if you didnot pass any value,it will show undefined. in that case,i used if statement
*/
function calculateCartPrice(...num1){
    return num1
  } // "..." it will take unlimited value you give in arguement
  // by giviing (...) it will show all the values of console.log, dont need to give many parameters
  //but if you give val1,val2 it will take the first 2 values & show rest of them
  console.log(calculateCartPrice(200,400,500,2000)); // ans : [ 500, 2000 ]
  
  // how to pass object in function? lets see it--
  const user = {
    username : "hiteshvai",
    age : 18
  }
  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
  }
  handleObject(user)  // ans : username is hiteshvai and age is 18
  
  // you can directly pass/add/rewrite object in funciton; 
  
  handleObject(
    {
      username : "rolex",
      age : 5
  
    }     
  )
  // passing array in the funciton  
  const myNewArray = [200,400,100]
  
  function returnSecondValue(getArray){
    return getArray[1]
  }
  console.log(returnSecondValue([200,400,500,1000])); // ans : 400
  

