//Header.js : we are using function to define a component
import React from 'react'

// shortcut for react component function **rfce**

//the name of a function should be equal to the name of the file 
 export default function Header(){
    // whatever we have writen in return will call as a jsx 
     return (
      <>
         <div className='demo_css' style={{color:"teal", fontSize:"20px", background:"pink"}}>
               Hello, I am a header component created 
               using React functional component
         </div>

         {/* condition ? <truepart >:<falsepart>  */}
         {(10==='10')?'true condition':'false Condition'}
      </>
     )
}

//to export this function
// if we have not write a default keyword then we have to import as {Header}
// export default Header