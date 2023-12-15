// Conditions and loops  

// conditiona nd loops
    //   .Conditionals in Js 
            //   .if else 
            //  switch case 
    // loops in js 
            // for loop
            // while loop 
            // do while loop 
    // break and continue statement 

let age=13;

if(age>18){
    console.log("Go ahead and practice your right to vote")
}
else{
    console.log("you are not able to vote")
}

// ternary operator 
// (condition? true: false) 

let p=10;
p===10? console.log('p is equal to 10') : console.log('p is not equal to 10')

// switch will work as same 
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      console.log("friday")
      break;
    case 6:
      day = "Saturday";
      console.log("saturday");
  }


//   loops ----------------------------------

let i=1;
while(i<10){
    // if(14*i >= 100)
    // break
    i++;
    // to skip curr iteration increment should be before the continue statement 
    if(14*i === 98)
         continue
    console.log("14 *", i, "=", 14*i);  
}
 
for(let j=0; j <= 10; j=j+2){
    console.log(j);
}
  
let s=16
do{
    console.log(s)
}
while(s<15)