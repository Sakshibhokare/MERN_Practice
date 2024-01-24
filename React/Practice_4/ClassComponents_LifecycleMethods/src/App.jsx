import React from "react"
import Controlled from "./components/Controlled"
import Uncontrolled from "./components/Uncontrolled"
import MyComponents from "./Lifecycle_Methods/MyComponents"


import axios from 'axios';
import './NPM_HOC_ReactRouting/Form/form.css';
import './NPM_HOC_ReactRouting/Header/header.css'
import BasicComponent1 from "./NPM_HOC_ReactRouting/Higher_order/BasicComponent1";
import BasicComponent2 from "./NPM_HOC_ReactRouting/Higher_order/BasicComponents2";
function App() {

  // ********** 3 **********
  axios.get('https://catfact.ninja/fact').then((result)=>{
    console.log(result)
  })

  // using async await 
  async function callAPI(){
    let res= await axios.get('https://catfact.ninja/fact')
    console.log(res)
  }

  callAPI();

  return (
    <>
    {/* 1. ********* Class Component ******* */}
    {/* controlled components :form data is extracted using state veriable and change handlers then it is controlled comp.  */}
      {/* uncontrolled components : form data which is not handled by changed components and state variables 
       1. getting multiple input data from form
       2. uncontrolled components and getting data from them*/}

       <Controlled></Controlled>
{/* for control components will use state and for uncontrolled will use ref for changeing and getting the input from user in form 
if we have multiple input fields in a form we can change the method of writing states  */}
       <Uncontrolled></Uncontrolled>








{/* 2. *************Lifecycle Methods*********** */}
{/* component life cycle
    phases
       mounting: entering
       updating: updating
       unmounting: leaving
    contructor: it runs very first
    render:any update or mounting will run render function
    componentDidMount(): as soon as your component mounted on state or web app this function will run
    shouldComponentUpdate(): updation part: there might be some setuations on which we dont want update anything, it will return boolean value
    componentDidUpdate(): it will run after the complete updation part
    componentWillUnmount(): unmounting stage it will print the information */}
<MyComponents></MyComponents>






{/* 3rd NPM HOC AND React Routing 
npm packages: to install use npm i nameOfPackage
             import package and then use
             for ex. axios use to fetch data 
             moments: use to work with date and time 
styled components
css modules
axios
higher order components
*/}

{/* it can be happen that css files can have same class name in the last ye merge hoke ak file hoti hei so we should always use unique name  */}
    <div className="container">
      hello,  there 
    </div>

    {/* we can make css file local to perticular component  */}
{/* to import use import style from './Header.module.css'  //.module is imp 
when we give a class name then use {style.container} or style.classNameGiven  {} imp*/}
   

   {/* higer order components : add something more on top of something
   suppose we have two components created the logic is get provide by higher order function, it provides a super power to the component*/}
 
 {/* when the logic is same for multple components as bellow then will be using HOF  */}
   <BasicComponent1></BasicComponent1>
   <br />
   <hr />
   <br />
   <BasicComponent2></BasicComponent2>

   {/* instead of return bc1 and bc2 will pass through hoc as c1 and c2 */}
    </>
  )
}

export default App
