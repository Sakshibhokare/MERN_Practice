import React from "react"
import Controlled from "./components/Controlled"
function App() {
  

  return (
    <>
    
    {/* controlled components :form data is extracted using state veriable and change handlers then it is controlled comp.  */}
      {/* uncontrolled components : form data which is not handled by changed components and state variables 
       1. getting multiple input data from form
       2. uncontrolled components and getting data from them*/}

       <Controlled></Controlled>
    </>
  )
}

export default App
