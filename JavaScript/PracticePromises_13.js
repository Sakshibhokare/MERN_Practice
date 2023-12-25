//promises examples 

function doLogin(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('login sucessful') 
        }, 2000);
    })
    
}

let response = doLogin();

console.log(response)