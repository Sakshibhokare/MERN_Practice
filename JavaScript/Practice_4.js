// Functions and Array 
// function decleartion 
function dummy(){
console.log("Function 1")
}

// function expression 
var dummy2= function(){
console.log("function 2")
}

dummy()
dummy2()

// inside of one function we can declare new function or we can get the function as a parameter 






// Arrays------------------------------------------------
var arr=[34, 45, 'Sakshi', 'Siddhi', true]

// Insert Something- Starting, end, custom indx
arr.push(56) 
console.log(arr)

// starting 
arr.unshift("Gauri")
console.log(arr)

//at perticular index 
 //  index deleteCount valuesToAdd 
arr.splice(4, 0, 100, 1000)
console.log(arr)






// Remove something- starting, end, custom index
// end 
arr.pop();
console.log(arr) 

// start 
arr.shift()
console.log(arr)

// slice and splice diff
// slice will devide an array into small size 
// splice will modify the elemets of array 


// size/length 
console.log(arr.length)


// iterate on arrays 
for(var i=0; i<arr.length; i++){
    console.log(i, arr[i])
}

// forEach is a higher order function
// forEach accepts a function 
// it will run according to the no of elements present in a array i.e. clg will get printed n number of time  

// represenation     first=item   index  completeArray 
arr.forEach(function helper(item, index, array){
    console.log('helper function is there', item, index, array)
})


