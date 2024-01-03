//Performance 
//mesure speed of code
// how to write effecient and performing code 
// event loop 


// example 
// to count the difference between strat and end time take t1 and t2 
const t1=performance.now();
for(let i=0; i<=100; i++){
    let newElm = document.createElement('p');
    newElm.textContent="this is new para"+i;

    document.body.appendChild(newElm)
}
const t2= performance.now();
console.log("this will take"+(t2-t1)+"ms")


//optimising a bit
let t3=performance.now();

let myDiv=document.createElement('div');

for(let i=0; i<=100; i++){
    let newElm=document.createElement('p');
    newElm.textContent="this is new para"+i;

    myDiv.appendChild(newElm);
}

document.body.appendChild(myDiv)

let t4=performance.now();

console.log("this will take "+(t4-t3))


// reflow: when we add new element all the mathematical operations calculations  known as reflow
// repaint: display the layout pixel by pixel is known as repaint 
// good practice is minimum reflow and repaint happens 
// in above example we did 100 reflow and repaint 


// Document fragment : light weight documnet obj

// using fragment : most optimized
let fragment= document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let newElm=document.createElement('p')
    newElm.textContent="this is new para"+i;

    fragment.appendChild(newElm);
}

document.body.appendChild(fragment); // 1 reflow and 1 repaint 



//********** / the call stack **********
// js is a single threaded language which mean it can process one command at one time 
// it doesnt execute multiple lines 
function addPara(){
    let para = document.createElement('p');
    para.textContent='js is single';
    document.body.appendChild(para);
}

function addmsg(){
    let para = document.createElement('p');
    para.textContent='js is single';
    document.body.appendChild(para);
}

addPara()
addmsg()

// when function will get called the entry will get added into the callstack and then once the execution is done that entry will get removed from the call stack 
// call stack 

// | addPara() | first will execute addpara and then remove the entry from cstk
// |  main()   |

// after deleting addPara will add addmsg into the call stack 


//************** Event Loop ***********/

// synchronus : occuring at the same time 
// we have stack browser and queue 
// at each line the entry will go to callstack first 
// if and only if the first entry is completed and removed then only second entry will get added 
// but if some lines are not able to execute such as AddEventListener , that function will get handover to browser 
// when some one will click and addEventListener will get started then that function entry will be stored in queue
// queue only return the function when the callstack is empty  
// http://latentflip.com
// all async operations will be in queue and run after complete execution of callstack 