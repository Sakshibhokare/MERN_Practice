// Constructor and Prototype 

// -constructor 
// this keyward 
// call apply and bind methods 

let bf={
    name:"p",
    age:"23",
    favSnack:"panipuri"
}

// if different peoples from same category 
// constructor have a templete of a object and we can pass the values to it 

// newStudent = createStudent(name, age, rollNo){

// }
//constructor: uses this and new keywards 
function student(name, age, rollNo ){
    this.name= name;
    this.age=age;
    this.rollNo=rollNo;
}

let student1 = new student("Abc", 17, 10)
let student2 = new student("Xyz", 18, 23)
let student3 = new student("ppp", 23, 21)

console.log(student1,"         ",student2,"          ", student3)

// factory function works similar as a constructor
function createStudent(name, age, school){
    return {
        name:name,
        age:age,
        school:school 
    }
}

let stud1= createStudent("aaa", 23, "abc")

console.log(stud1)
// pointing to windows and when it is in object it will point to that object only 
// function dummy(){
//     console.log(this)
// }
let obj ={
    methodOfObj:function dummy(){ // point to object 
        console.log(this)
    }
}
// dummy()
// pointing to object only 
obj.methodOfObj()




// --------------------------------------------------------
// arrow function : again pointing to windows and when it is in object it still pointing to the windows 
let dummy = ()=>{
    console.log(this)
}
dummy()

let obj2={
    methods:dummy // point to windows
}


// **********
// if function inside a function then it will point to the global 
// if a arrow function is inside a function then it will point to the object 




// binding --------------------------------------------------------

// we can borrow one function from another object  
let teacher={
    name:"Mr. alpha",
    age:60
}

let students ={
    name:"lucky",
    age:16,
    printInfo:function(){

        console.log(`${this.name} is ${this.age} years old`)
    }
}

students.printInfo()

// borrowing an method from another object syntax is 
// methodToBorrow.call(objectToBorrowFor)
students.printInfo.call(teacher);