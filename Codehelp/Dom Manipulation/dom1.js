// window-> dom-> Bom 
// window is a global object created by browser and represents browser window 

// hmtl converted in js object it is known as document (dom) 

// bom : to communicate with browser other than content then will use BOM ex. alert msg 

// getElementbyId
document.getElementById("idname")

//getElementbyClassName: return multiple objs
document.getElementsByClassName("classname")[0]

// getElementByTagName() : return multiple objs 
document.getElementsByTagName('p')

// we can acces element using $0 on console 

// document.querySelector
document.querySelector("#idname")
document.querySelector(".heading")//first one 
document.querySelector("p")//first p 

// for multiple 
document.querySelectorAll(".heading")[0]

//*******************/ Update existing content ************************

// innerHTML: get an element / all of its descendents 
            //   set an element's html content 

let example=document.querySelector(".example") 
console.log(example.innerHTML='') 
console.log(example.innerHTML)    // give tag information also       

//textContent
let comp=document.querySelector(".comp")
console.log(comp.textContent)//only give text data not tag

//innerText: display hidden will not be visible



//********** Adding New Element🤩🤩 ************/

 let content=document.querySelector('.para')

 let newPara=document.createElement('p');// add element at the end always 

 content.appendChild(newPara);

// 1st create text node 😒
let textPara=document.createTextNode('I am the text')
 
newPara.appendChild(textPara);

content.appendChild(newPara)

//2nd way

let myPara=document.createElement('p');
myPara.textContent="I am the para";
content.appendChild(myPara)

// Add element at require location 
let cntnt=document.querySelector(".cnt")
let textToAdd=document.createElement('h3');
textToAdd.textContent="ABCDEFG";

cntnt.insertAdjacentElement('beforebegin', textToAdd);
cntnt.insertAdjacentElement('afterbegin', textToAdd);
cntnt.insertAdjacentElement('beforeEnd', textToAdd);
cntnt.insertAdjacentElement('afterEnd', textToAdd);

//************* Remove html element ***********😁😁
// requirments: parent.removeChild(childElement)
//1st way
let childElement=document.querySelector('.text');

let parentElement=document.querySelector('.heading');

parentElement.removeChild(childElement)

//2nd way
// child.parent.removeChild(child) 


//************(❁´◡`❁) css properties changes(●'◡'●) **********

// Style, cssText, setAttribute, classname, classList these properties can be use to make changes

content.style.color='red'
content.style.backgroundColor='white'
// multiple prop 
content.style.cssText='color:green; backgroundColor:yellow; font-size:4rem;';
// setAtt 
content.setAttribute("style", "background-color:red;");
// we can add an Id 
content.setAttribute("id","headingkiId")

// it will return a string of classes 
content.className;
content.className.split('')//it will split the classnames 
content.className.trim().split('')//empty '' spaces will get removed 

content.classList // it will return an array of classes 
// we have add, remove, toggle, contains methods 
// toggle will check if class exists or not if not then add as a new class 





