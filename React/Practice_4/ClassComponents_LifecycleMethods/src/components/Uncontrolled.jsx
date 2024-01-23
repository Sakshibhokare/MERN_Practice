import React, {useRef} from "react";

function Uncontrolled() {
  let fnameRef= useRef(null);
  let lnameRef= useRef(null);


  let submitHandler=(e)=>{
    e.preventDefault();
    console.log(fnameRef.current.value)
    console.log(lnameRef.current.value)
    console.log('submit handler')
  }
    return (
        <div>
          <h1>Uncontrolled components</h1>

          <form onSubmit={submitHandler}>
            <input type="text" placeholder="First Name" ref={fnameRef}></input> <br></br> <br></br>
            <input type="text" placeholder="Last Name" ref={lnameRef}></input> <br></br> <br></br>
            <button>Submit</button>
          </form>
        </div>
    )
}

export default Uncontrolled