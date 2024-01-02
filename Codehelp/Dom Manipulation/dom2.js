// Browser events 
// events 
// Response to events 
// data stored in event 
// stop an event 
// lifecycle of event 

// events 
// addEventListener 🤩🤩 eventTarget.addEventListener(EventToListenFor, functionToRunWhenEventHappens)
let button=document.querySelector("button");
button.addEventListener('click', ()=>{
    alert("Button is Clicked");
    button.style.background='red';
})
//events: click, scroll, dubleclick and many more 

// type conversion 
// when js will try to convert the items being compired to same type 
// == follows above , === it doesnt 


// removeEventListener*********************

// both print functions are different wont remove the print function
// to solve this we have to call a function separately and then only call that function  
document.addEventListener('click', function print(){
    console.log("Hiee")
})

document.removeEventListener('click', function print(){
    console.log("Hiee")
})

// solution : target event and function should be same 
function print(){
    console.log("Hiee")
}
document.addEventListener('click', print);
document.removeEventListener('click', print);



//****** phase of Events */

// capturing phase : jab tak target nahi milta tab tak ka phase 
// at target phase: at target phase
// bubbling phase : while returning 
// we can decide in which phase we want to capture the event 
// default it will be working on bubbling phase 
// but for capturing phase will pass true as a third parameter 
document.addEventListener('click', print, true);

// we can stop default actions 
let links=document.querySelectorAll('a');
let thirdLink=links[2];
thirdLink.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log("default action is not working")
})

//avoid to many events 😍😍
// if we have number of paragraphs in diff div tags 
// so instead of adding event on different paragraph we will add the event on div 
let myDiv=document.createElement('div');
function paraStatus(event){
    console.log('para' + event.target.textContent); // by using target keyword we can access to paragraphs individually 
}

myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent='this is para'+i;

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);

{/* <div>
    p*100
</div> */}


{/* <article id="wrapper">
    <p>para <span> span </span></p>
    <p>para <span> span </span></p>
    <p>para <span> span </span></p>
</article> */}

let element = document.querySelector("#wrapper");

element.addEventListener('click', function(event){
    if(event.target.nodeName='SPAN'){
        console.log('span pr click kiya' + element.target.textContent); // it will work on span tag only 
    }
    
})

//when we click on span it will return "span" but when will click on para it will return "para span"
//this is happening because of the phases



