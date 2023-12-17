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
