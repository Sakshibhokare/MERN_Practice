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
//output is also a promise 
output.then((value)=>console.log(value)) //value will be output of waada2


//******** async await *******
// ayncs function works with promises and returns a promise always 
// if we want p2 execute after p1 then we can use await keyword to stop the execution of p2 before p1 

async function demo(){
    return 4012003;
}
console.log(demo)
// output: [AsyncFunction: demo] 

async function utility(){
    let delhiMausam= new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Delhi me bhot garmi hai");
        }, 10000);
    });

    let hydMausam= new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Hyderabad is cool")
        }, 5000)
        
    });

    let dM= await delhiMausam;
    let hdM= await hydMausam;
    

    return [dM, hdM];
}

console.log(utility())


//*********** fetch api ***********
//get call
async function util(){
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/4');
    let output=await content.json();
    console.log(output)
}

util()

// to fetch api will give two parameter 
// fetch('url', [options])  in option we can add authentication key or something which can help in validation  

//post call using fetch 🤩🤩🤩☆*: .｡. o(≧▽≦)o .｡.:*☆
// fetch('url', optionWalaOBJ)

async function helper(){


let options= {
    method:'POST',
    body:JSON.stringify({  //json ko string me convert
        title:'foo',
        body:'bar',
        userId: 1,
        weight:60,
        title:"YoYo"
    }),
    headers:{
        'Content-type':'application/json; charset=UTF-8',
    },

};

let content=await fetch('https://jsonplaceholder.typicode.com/posts', options);
let response=content.json();
return response;
}

async function utilities(){
    let ans =await helper();
    console.log(ans)
}

utilities()