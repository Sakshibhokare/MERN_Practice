import React from "react"
import Controlled from "./components/Controlled"
import Uncontrolled from "./components/Uncontrolled"
import MyComponents from "./Lifecycle_Methods/MyComponents"
function App() {
  

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

    </>
  )
}

export default App
