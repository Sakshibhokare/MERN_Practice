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

document.getElementById('Sakshi')

document.getElementsByClassName('Sak')
// it gives HTML collection to get first element we can do it like [0]
// if want to select 5th element [4]

document.getElementsByTagName('div')

// queryselctor slect tag in side a tag
document.querySelector('div h1')
document.querySelectorAll('div h1')