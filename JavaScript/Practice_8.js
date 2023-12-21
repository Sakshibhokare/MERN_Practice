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



//   TDZ: in this case the variable is in memory but we can not access it this is known as a TDZ
  console.log(s)
  let s=10;
//   in case of var it will give undefined 