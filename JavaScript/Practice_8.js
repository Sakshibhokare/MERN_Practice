//closures 
// Execution of JS code 
// hoisting 
// call stack 
// lexical scope 
// closure VVIMP

let a=10;

function sample(){
    dhksdjksjdk //no matters until it get called
}

console.log(a)
// Execution 
// happens in two part 
// first part is memory allocation : allocate memory to all variables and function we dont know the value of the variables 

// second part is execution :code will execute line by line, values of variables will be placed in memory 

function sample2(){
    let b=20;
    console.log(b)
}

sample2()

//  memory                            execution 
// allocate memory            value of a will get replaced
// to a 
// we cant allocate           ignore the function
// memory to b because 
// the scope is not            once we call function new scope will get execute
// global 
// a=[]                        function execution context = same thing happen again 
// sample=[body]                     memory all       execution
                                    //   b=[]          b=10
                                    // once this is complete we can execute remaining content 
 
// ---------------------------------------------------------------------------------------------
//  hoisting :      
// we will alocate memory to function sample3 
// and when we try to call it anywhere it will look 
// into memory that is there any function present such as a sample3 
// that is why we can call a function anywhere                               
  sample3()
  
//   here it give complete body 
  function sample3(){
    console.log("sample 3")
  }


//   fun()
// this time it will work as a variable 
// so, we can not call this before declaration 
  let fun = function(){
    let q=20;
    console.log(q)
  }


// ----------------------------------------------------------------------------------------------------
//   TDZ: in this case the variable is in memory but we can not access it this is known as a TDZ
  console.log(s)
  let s=10;
//   TDZ happens with let and const only 
//   in case of var it will give undefined 

// ----------------------------------------------------------------------------------------------
// call stack follows LIFO : use to maintain the flow of execution
// | inner fun|
// | outer fun|
// |   global |

// if the value is not present in inner fun will pop and look into outer , even if the value is not present is outer fun will look in global scope



// -----------------------------------------------------------------
// lexical scoping : look into all scope below the current scope
// if we have a muliple scope d c b a 
// if the value is not present at d will look into c or b or a 
// if not present in a then return arror 



// --------------------------------------------------------------------
// closure 
  function outer(){
    let outerVariable = 10;
    // closure property of inner function is helping it to access the value of outerVariable 
    // despite it not being approachable with lexical scoping 
    function inner(){
        console.log(outerVariable);
    }
    return inner;
  }

  let result = outer();
  result();//its equivalent to saying inner()


//   call stack

// |outer  | 
// | global|

// inner will never go to callstack because we have not called that function 
// but when we calle result(): it means we are actually calling inner() 
// now the call stack is 
// |inner |
// |global|

// outerVariableis not present in global scope still this is working because of closure property 

