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
  

// Arrow Function

const user1 = {
  username : "hitesh",
  price : 999,

  welcomeMessage: function(){
    console.log((`${this.username}, welcome to website`));
    console.log(this);
  }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
    console.log(this);

    /* function chai (){
      let username  = "hitesh"
      console.log(this.username); ans: undefined; because it will work on object but not in the function
    }
    chai()

      const chai = function (){
      let username  = "hitesh"
      console.log(this.username) ans : same */

      
      let frooto = (number1,number2) =>{
        return number1 + number2
      }
      console.log(frooto(19,.77));
      // let  addTwo = (num1,num2) => (num1 + num  2) // in curly bracket ,return needed to be write, in parenthesis return not need to be write;implicit return
      

      //obbject in this type of function
      let add = (num1 , num2) => ({username : "hitesh"}) // for return a obejct, needed to wrap it with parenthesis.
      console.log(add(45,67)); 

      // immidiately invoked function expression (IIFE)

      (function chai(){
        //  Named IIFE
        console.log("DB Connected");
      })(); // () == chai()
      //chai()

      ( (name) =>  {
        console.log(`Db two ${name} `);
      })("hitesh")