// 1. Write a function that takes two numbers as arguments and returns their sum. 
function sumOfTwoNumbers(num1, num2){
    sum=num1+num2;
    return sum;
}

console.log(sumOfTwoNumbers(8,8))

// 2. Write a function that takes a string as an argument and returns its length. 
function len(string){
    return string.length;
}

console.log(len("Sakshioihhdchsj"))

// 3. Write a program that takes two numbers and displays their sum, difference, product, and quotient. 
const first=20;
const second=50;

let Sum=first+second;
let difference= second-first;
let mul=first*second;
let div=second/first;

console.log(Sum, difference, mul, div)

// 4. **Write a function that takes two numbers as arguments and returns the larger number.**
function largeNo(no1, no2){
    if(no1>no2){
        console.log(`larger number is ${no1}`)
    }
    else{
        console.log(`larger number is ${no2}`);
    }
}

largeNo(55, 67)

// 5. Write a program that displays a string in reverse order.
function reverseString(str){
    let reversedStr=str.split("").reverse().join("");
    return reversedStr;
}

console.log(reverseString("sakshi"))


//6.Write a program that takes a number and checks whether it is positive, negative, or zero.

function checks(number){
    if(number>0){
        console.log(`${number}: is a positive number`)
    }
    else if(number==0){
        console.log(`${number}: is a zero`)
    }
    else{
        console.log(`${number}: is a negative number`)
    }
}

checks(0)

//7. Write a program that takes a number and prints the multiplication table for that number.
function table(numb){
    for(let i=0; i<=10; i++){
        multi=numb*i;
        console.log(multi)
    }
}
table(6)
console.log("----------------------------------------------------------------")
// 8. Write a program that takes a number and calculates the sum of all numbers from 1 to that number
function total(a){
    let ttl=0;
    for(let i=0; i<=a; i++){
        ttl=ttl+i;
    }
    console.log(ttl)
}

total(19)
console.log("------------------------------------------------------")
//9. Write a program that takes a string and prints out the number of vowels in the string.
function countVowels(strng){
    const vowels=["a", "e", "i", "o", "u"];
    let count=0;

    for(let i=0; i<strng.length; i++){
        if(vowels.includes(strng[i].toLowerCase())){
            count++;
        }
    }

    return count;
}

console.log(countVowels("Sakshi Bhokare"))

console.log("-----------------------------------------------------")
// 10. Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5]. 

function commonElmnt(arr1, arr2){
    let commomElements=[];
 for(let i=0; i<arr1.length; i++){
    if(arr2.includes(arr1[i])){
        if(!commomElements.includes(arr1[i])){
            commomElements.push(arr1[i]);
        }
    }
 }
 commomElements.sort((a,b)=>a-b);
 return commomElements;
}

let arr1=[4,5,6,7,8,8,9]
let arr2=[5,5,6,7,7]
let commomElements=commonElmnt(arr1, arr2)
console.log(commomElements)