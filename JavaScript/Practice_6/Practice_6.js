//understanding DOM
// How can you select elements 

// js cant modify html file directly DOM is the intermidiator between html and js to manupulate html components 
// it a browser functionality 

// your document is converted in object model it is a tree like structure 
                    // document 
                     //  | 
                 //    HTML
                //    /  \
                // head   body 

// how to select an element   
// documnet is a grand parent, which have everything in it      

let element = document.getElementById('Sakshi')



document.getElementsByClassName('Sak')
// it gives HTML collection to get first element we can do it like [0]
// if want to select 5th element [4]

document.getElementsByTagName('div')

// queryselctor slect tag in side a tag
document.querySelector('div h1')
document.querySelectorAll('div h1')[0]


// manipulate elements =----------------------
// typeof element[0]

element[0].innerText

element[0].innerText = 'changed using js'

// element.innerHTML it give you the tag or extra html written 

// element.textContent it will give spaces and indentations 





// manipulates the styles -------------------------
// all css properties will be visible 
// element[0].style 
element[0].style.color = 'red'
element[0].style.fontSize



// add something using js 
let imageElement = document.createElement('img')

imageElement.setAttribute('src','url')

// make it visible to frontend
// where.appendChild(whatToAppend) 
document.body.appendChild(imageElement)

// appending at perticular div js 
// select element jiske niche we want to append 





// add/edit attributes -------------------------
// event listeners(event, funcToRun) : this is a inbult method avaiable on all the nodes or objects 

let button = document.querySelectorAll('button')[0]

button.addEventListener('click', function (){
    console.log('Button is clicked')
})

// if we have multiple attribbute 
for(let i=0; i<button.clientHeight; i++){
    button[i].addEventListener('click', function(){
        console.log("button is clicked")
    })
}

// for every event we have information  like which key we have pressed
button.addEventListener('click', handleClick)

document.body.addEventListener('keypress', (event)=>{
    console.log(event)
})
