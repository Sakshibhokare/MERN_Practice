// Promises; just a special javascript object which represent sucess or faluire of async operation 
//promises examples 

function doLogin(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('login sucessful') 
        }, 2000);
    })
    
}

//once the async function completes its execution then the value will get added to response variable it will get replace by the value
let response = doLogin();

console.log(response)


// 2 ways of handling promises 
// i. using .then().catch() 
doLogin()
.then(()=>{
console.log("login sucessful")
})
.catch(()=>{
console.log("login failed")
});


//ii. using async await...
async function doSomething(){
    try{
        let result = await doLogin();
        console.log(result);
    }catch(e){
        console.log("login Failed")
    }
    
}

doSomething();


// API : application programming interface
// object is converted from json to javascript 
// JSON.parse(jsonOBJ)

// object from javascript to JSON 
// JSON.stringify(jsonOBJ)

// fetch data from url of api 
let resp=fetch('https://catfact.ninja/fact')
.then((response)=>{
   console.log(response)
   //to read the data
//    this is agian a promise so we make chain of then to get value from promises  
   return response.json();
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
console.log(err)
})
console.log(resp)

// status related to 200 is sucess related to 400 mean an error and related to 500 mean server is not able to solve this 


// 2nd way to fetch data from API 

async function callApi(){
    try{
        let response = await fetch('https://catfact.ninja/fact');
        let data = await response.json();
        console.log(data.fact);
        document.write(data.fact);
    }
    catch(e){
console.log(e)
    }
  
}

callApi();