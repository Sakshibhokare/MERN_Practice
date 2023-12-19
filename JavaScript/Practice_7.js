// let var const 
// let and var in loops 
// arrow function 


// 1st diff : scope
// var has global scope 
// const and let have block scope 

for(let i=0; i<5; i++){
    var x=10;
}
console.log(x) //accessible because of var 

// 2nd reassignmnet 
// const not possible reassignmmet 
// var and let = possible 

const a =10;
//  a=20; //not possible to change the prev assignmnet
 console.log(a)



// 3rd redeclartion 
// let and const = not possible 
// var = possible 

var x=0
var x=80
console.log(x)


// 4th hoisting and tdz (temporial dead zone)
// tdz: space in a memory where variable is not declare and not able to access it 
// let const = not possible
// var = possible 
console.log(p)
var p=20
console.log(p)


// arrow function 
function sum(a, b){
    return a+b
}

let sum2 = (a,b)=>{
    return a+b;
}

