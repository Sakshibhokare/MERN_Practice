import React from "react"
import Controlled from "./components/Controlled"
import Uncontrolled from "./components/Uncontrolled"
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
       mounting
       updating
       unmounting
    contructor
    render
    componentDidMount()
    shouldComponentUpdate()
    componentDidUpdate()
    componentWillUnmount() */}


    </>
  )
}

export default App
