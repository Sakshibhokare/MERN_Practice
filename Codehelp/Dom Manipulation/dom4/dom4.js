//promises and async await 
setTimeout(function(){
    console.log("third")
},2000)

function sync(){
    console.log("first")
}

console.log("second")

//out: first second third 

// API(application programming interface) : way to connect backend to front end 
// me -> paytm(api) -> bankac 

// features of async code 
// clean and concise 
// bettter error handling 
// easier debugging 



//*********** promises😊 ******************
// is used to execute methods parallelly 
//always requires callback function in promises with two parameters for sucess and failure 

let meraPromise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("i am inside promise 1")
    }, 10000);
    resolve(200);
});

let meraPromise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("i am inside promise 2")
    }, 8000);
    resolve(200);
    // reject(console.error("error occur"))
});
// according to timing meraPromise2 will get execute , but we are using promise so the meraPromise1 will aslo start parallelly 
// so meraPromise1 will take 2000 ms to run instead of 5000 
console.log("---first---");


//*********** then and catch ***************/
// then will return a value and catch will return an error 
// then: when the promise is done and you still want to do something with promise response we can use then method 
meraPromise1.then((value)=>{
    console.log(value)
})
//catch is use for error 
meraPromise1.catch((error)=>{
    console.log("received an error")
})


// if we want task a b c happen in sequence then we can use promise and then method 

let waada1= new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Waada1")
    },2000)
    resolve("waada1 resolved")
})

let output = waada1.then(()=>{
    let waada2=new Promise(function(resolve, reject){
        resolve("waada2")
    })
    return waada2; //returning a promise 
})

output.then((value)=>console.log(value)) //value will be output of waada2

