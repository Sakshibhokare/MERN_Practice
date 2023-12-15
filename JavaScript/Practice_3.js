// Functions and Arrays 
// functions and hoisting 
// scopes 
// function expression 
// function within function 
// passing function as an argument 






// function sayHello(userName){
//     // console.log("Hello", userName);
//     return "cooldude_"+userName
// }

sayHello("Sakshi04");
sayHello("Sakshi08");

//returning the value into a verable
// let u1= sayHello("sakshi")
// let u2= sayHello("Siddhi")

// console.log(u1, u2)


// if we changes the sequence -----------------------------
// it will work fine because of function hoisting
let u1= sayHello("sakshi")
let u2= sayHello("Siddhi")

console.log(u1, u2)
// this is function declaration and hoisting only work for declaration 
function sayHello(userName){
    // console.log("Hello", userName);
    return "cooldude_"+userName
}





// this is function expression it wont support to hoisting 
let add = function(a, b){
    return a+b;
}

let ans=add(7,7)
console.log(ans)




// scope--------------------------------------------
// we have global scope and functional scope 
// we can not access a veriable which is declared in a function 
// block scope : which is defined in a loop


// function inside a function ----------------------
function sayBye(){
    console.log("Bye Bye");
}

function greet(byeFun){
    byeFun();
    function doSomething(){
        console.log('doing something')
    }
    return doSomething();
}

greet(sayBye);