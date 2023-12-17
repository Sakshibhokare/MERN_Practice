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

// represenation of para is fixed     first=item   index  completeArray 
arr.forEach(function helper(item, index, array){
    console.log('helper function is there', item, index, array)
})
// forEach is a function not a loop 
// it is a callback function 

console.log("---------------------------------")

// Treming the forEach function 
arr.forEach((i, ind, ar)=>{
    console.log(i, ind, ar)
})




// forEach and map 
// forEach: just for the iteration and cant return anything from it 
// map: you can iterate on array and we can customize an array and also can print it 
console.log("--------------------------------------")
arr.forEach((i)=>{
    console.log(i*2)
})
console.log("----------------------------------")


// this is not possible with forEach, can not return anything 
let twice = arr.map((i)=>{
    return i*2
})
console.log(twice)



// Filter -----------------------------------
var filtered = arr.filter((item, index, array)=>{
    return item>30
})

console.log(filtered)
// filter will define specific values only 

console.log("-----------------------------")
var temp= arr.map((item)=>{
    if(item>50) return item
})

console.log(temp)
// [
//     undefined, undefined,
//     undefined, 100,
//     1000,      undefined,
//     undefined
//   ]
// if not matched it will return undefined 


// reduce function -------------------------------
// use: it is used to reduce an array into a single value ex. sum of all elements 

console.log("----------------------------------")
var num=[20, 30, 40, 50]
// reduce always have a two parameters in which first will contain updated value with respect to second 
var sum= num.reduce((accumulator, item)=>{
    return accumulator=accumulator+item 
})
console.log(sum) 