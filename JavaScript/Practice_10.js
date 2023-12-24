// Prototypes 
// Objects 
// adding behaviour to objects 
// function to create object 
// Prototype: what and why? 
// Properties around prototype 


// prototype: is a method of inheriting its property from its parent class 
let person={
    name:"Alpha",
    age:19,
    talk:function(){
        console.log("talking now...")
    }
}

person.favColor="pink"
console.log(person)

// Object is already define we are inheriting create property 
let person2 = Object.create({
    name:"createeee",
    age:28,
    talk: function(){
        console.log('.create talking now...')
    }
})

console.log(person2)

// diff: if we use Object.create would not directly add the properties to the object, it will add to its prototypes 