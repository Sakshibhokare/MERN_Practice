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
// obj.i mean it is actually searching for i 
// obj[i] means anything equvalent to this 






// premitive and referencial ---------------------------------------

let y =10;
let z =y;
// deep copy 
// means that only the value is copied and not the reference 
y=20
console.log("y:", y)
console.log("z:", z)
// 20 10 



// q and t are both accessing to the key memory block in short they are taking reference of [key=], so it will reflect to botj 
// reference of q and t is same which is key 
let q = {
    key:10
}
// this is a shallow copy concept 
// means that the reference is also copied along with the value 
// let t=q
let t={...q}
q.key=20
console.log("q:", q)
console.log("t:", t)
// 20 20 



// spread operation {...a} to understand this concept we can make a use of container of marbles 
// in wich we have to add marbles in M3 container from M1 and M2 but only marbles not container of m1 and m2 
// so we can write as M3=[...m1 , ...m2]



// nested object 
// we can not use ... spread operator in this case 
// instead we can use json.parse and json stringfy 
let a ={
    key:10,
    nested:{
         nestedKey:100
    }
}