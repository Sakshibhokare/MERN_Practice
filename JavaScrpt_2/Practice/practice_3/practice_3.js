// - DOM manipulation and events
// - Asynchronous JavaScript and callbacks

// 1. ****Write a function to change the text of a button on the click event.****

const button=document.querySelector("button");
button.addEventListener("click", changeButtonText=>{
button.textContent="clicked!!!!"
});

// 2. Write a function to add a CSS class to an element on the mouseover event.
button.addEventListener("mouseover", ()=>{
    button.classList.add("active");
})

//3. Write a function to remove a CSS class from an element on scroll event. 
let para=document.querySelectorAll("p")[1]
window.addEventListener("scroll",()=>{
    if(button.classList.contains("active")){
        button.classList.remove("active");
    }
    para.style.backgroundColor='pink'
})

// 4. ****Write a function to toggle the display of a div element on click event.****
let click=document.querySelector("#click");
let active=document.querySelector(".active");
click.addEventListener("click",()=>{
    if(active.style.display="none"){
        active.style.display="block"
    }
})

// 5.Write a function to validate a form on submit event.
//Form_Validate

// 6. Write a function to fetch data from an API using the Fetch API and handle the response with a callback.

async function apicall(){
    let response= await fetch('https://fakestoreapi.com/products/1');
    let data= await response.json();
    document.write(data.title);
    document.write(data.price);
}

apicall()