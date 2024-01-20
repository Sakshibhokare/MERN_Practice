import React from "react";

function Uncontrolled() {
    return (
        <div>
          <h1>Uncontrolled components</h1>

          <form>
            <input type="text" placeholder="First Name"></input> <br></br> <br></br>
            <input type="text" placeholder="Last Name"></input> <br></br> <br></br>
            <button>Submit</button>
          </form>
        </div>
    )
}

export default Uncontrolled