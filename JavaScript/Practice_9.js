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