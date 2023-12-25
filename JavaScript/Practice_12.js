// Asynchronous js 
// event loops
// callback queue 
// callback hell 
// promises 

// Async : it will not wait to execute the current line it will print the next line 
console.log("first")

// we are simulating asynchronous operations
// collecting api calls 
// reading some files  
// timer delay  are the examples of ascn  
setTimeout(()=>{
    console.log("second")
}, 1000)

// this is not ascn 
// timer will get execute only after everything is executed 
for(var i=0; i<100000000; i++){

}

console.log("Third")


// where is the timer function is going ?
// when it will reach to the timer function it will let brower know that start the timer counting and after timeout it will get added to the callback queue and once the execution is done then js will execute these callback queue 
// timer->passToTimercounting->callbackQueue->callStcak->execute



// Single and multithreading---------------------------------------------------------
// single threading : process will get execute only if the previous one is completed 
// multi threading : parellely multiple processes will get execute 



// Promises------------------------------------------------------------------------------



function responseFromApi(){
    setTimeout(()=>{
        return 'response';
    },2000)
}

// problematic situation 
let response = responseFromApi()
//undefined will get printed because we dont have response yet 
console.log(response)


// callback: when main functions run then only internal function will get execute
function doLogin(){
    setTimeout(()=>{
    console.log("loging...")
    }, 1000)
}
function showUserDetails(){
    console.log("showing details...")
}
function doTransactions(){
    console.log("transactions...")
}

//this sequence matters 
// if we execute as follow it can break the order 
doLogin()
showUserDetails()
doTransactions()
console.log("-----------------------------------")
// we can handle it by using following way : callback
doLogin(showUserDetails(doTransactions()));



// Promises: is the better option than callback 
let response = doLogin() // sucessful failed pending
// response={pending} 
// if doLogin is using promises...... 
// response will be immediately populated with a special object possing pending state 
// once the login gets sucessful, it will replce the value with the value with the actual value returened from that function 
// if the loging fails, it will replace with the error message or whatever... 
showUserDetails()
doTransactions()

// PROMISES 
// promises represents an eventual completion or failure of a async operations 