// Objects and Events 
// create objects, access, manipulate, delete properties
// iteration on objects 
// primitives vs referential type 
// deep vs shallow copy 

// Objects create
var myPet = {
    name:"Saks",
    age:5,
    species:"good",
    sleep: function(){
        console.log("sleeping.........")
    }
}
// manipulate
console.log(myPet.name)
console.log(myPet['age'])
myPet.sleep()
myPet.age=6
console.log(myPet.age)
console.log(myPet)
// delete
delete myPet.age
console.log(myPet)
// add 
myPet.favFood="PavBhaji"
console.log(myPet)


// iteration on objects ------------------------------------
var arr=[29, 39, 49, 59]

var obj={
    name:"tommy",
    age:5,
    school:"ABC",
    city:"Nashik"
}

// we have for in and for of loops to iterate on array and Objects 
// array is also an object 
// for in is used for objects 
// if we used for array then it will only return the index 
for(var i in arr){
    console.log(i)
}
console.log("------------------------------------------")
for(var p in obj){
    console.log(obj[p])
}

for(var b in obj){
    console.log(`key: ${b} : value: ${obj[b]}`)
}

// for of is used for array 
for( var j of arr){
    console.log(j)
}

// cant used for object 
// for(var s of obj){
//     console.log(s)
// }