//classes in javascript 
// what are classes in javascript 
// class declaration and hoisting 
// inheritance using classes 

// calss can be define in two ways 
// declaration 
class person{
    name
    constructor(n){
        this.name=n;
    }
}

const p = new person('Sakshi')
console.log(p.name)

// 2nd way expression
const person2 = class {
    name
    constructor(n){
        this.name=n;
    }
}

const p2 = new person2('techie')
console.log(p2.name)

// hoisting is not applicable here in class concept 

// inheritance : prototype inheritance 

// whatever is coming from parent will pass to super constructor first 
class teacher extends person{
     constructor(){
        super(name)
     }
}

const t =new teacher();
console.log(t.name)