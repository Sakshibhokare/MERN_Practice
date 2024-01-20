// - Functions and scope 
// - Arrays and objects

// Write a function called 'greet' that takes a name parameter and logs a greeting message to the console. 
function greet(name){
    console.log(`Hello ${name}, How are you?`);
}
greet("Sakshi")

// 2. Write a function called 'getSquare' that takes a number parameter and returns its square.
function getSquare(number){
       return number*number;
}

console.log(getSquare(6));

// 3.Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.
function countLetters(str){
    const count={};

    for(let i=0; i<str.length; i++){
        const char=str[i];
        if(count[char]){
            count[char]++;
        }
        else{
            count[char]=1;
        }
    }
    return count;
}

const letterCount=countLetters("I am a girl, my name is Sakshi");

console.log(letterCount);

console.log("*******************************************");

// 4.Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.
function createCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

let counter=createCounter();
console.log(counter());
console.log(counter());
console.log(counter())

console.log("************************************************")

// 5. Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array. 
function sumEvenNumbers(arr){
    let sum=0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        sum=sum+arr[i];
    }
  }
  return sum;
}

let arr=[2,3,4,5,5,6,7,7,8]

let sum=sumEvenNumbers(arr);
console.log(sum)

console.log("**********************************************")

// 6. Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array. 
function sumOfElements(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }

    return sum;
}

console.log(sumOfElements(arr));

console.log("**********************************************")

// 7. Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.
function filterArray(strings){
    let filtered=[];
    for(let i=0; i<strings.length; i++){
        if(strings[i].length>5){
            filtered.push(strings[i]);
        }
    }
    return filtered;
}

let strings=["Sakshi", "Tommy", "Pranay", "gauri", "Deshmukh"];
console.log(filterArray(strings))


console.log("**************************************************************")
// 8. Write a function that takes an object and returns an array of all the keys in the object.
function getkeys(obj){
const keys = Object.keys(obj);
return keys;
}

const person={
    name:"Sakshi",
    age:20,
    role:"Software Engineer"
}

let keys=getkeys(person);
console.log(keys)

//9. Write a function that takes an array of objects and returns an array of all the values of a specified property name. 
function getProperties(arr, propName){
     const values=arr.map((obj)=>obj[propName]);
     return values;
}

const people = [
    { name: "Pranay", age: 22, gender: "male" },
    { name: "Sakshi", age: 21, gender: "female" },
    { name: "Siddhi", age: 18, gender: "male" },
  ];

  console.log(getProperties(people, "name"))
  console.log(getProperties(people, "age"))
  console.log(getProperties(people, "gender"))

// 10. Write a function that takes an array of objects and returns the object with the highest value for a specified property name.
function findMaxProperty(arr, property){
    if(arr.length==0){
        return null;
    }
    let maxObj=arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i][property]>maxObj[property]){
            maxObj=arr[i];
        }
    }
    return maxObj;
}
const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
    { name:"mango",   price:4}
  ];

  const maxObj1=findMaxProperty(arr1, "price")
  console.log(maxObj1)

