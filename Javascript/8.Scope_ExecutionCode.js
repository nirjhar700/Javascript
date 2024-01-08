const b = 2
var c = 40


{} // it is called a scope
let a = 300
if (true){
  let a = 10
  const b = 20
  var c = 30
  
}

/*
console.log(a); // ans : show error
console.log(b); // ans : show error
console.log(c); // ans : 30 ; var globally scope, it can access insider file of an scope.so thats var is not preferable
*/

// lets see with let --
console.log(a); // ans : 300

/*if we console.log(a) it will show result : 300
 because it took the "7th line" not the a which is in the function 
*/

//nested scope

function one(){
  const username2 = "monty"

  function two(){
    const website = "youtube"
    console.log(username2);
  }
  

  two()
}
one()

if(true){
  const username2 = "hitesh"
  if(username2==="hitesh"){
    const website = "youtube"
    console.log(username2+website);
  }
  //console.log(website); will show error
}
//console.log(username2); will show error


///----- types of functions-----////
addone(5)  //calling parameter before writing function,still it will work
function addone(num){
  return num + 1
}


/* addTwo(5) : show error .if we notice, we can see that, parameter calling before writing the function,but in this type of function,where we declared function with a variable, we cannot call the parameter before writing function*/
const addTwo = function(num){
  return num + 2
}

  