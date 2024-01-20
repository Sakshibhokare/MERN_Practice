import React from "react";

function Controlled2(){
    return (
        <div>
            <h1>Controlled component [multiple input from form]</h1>

            <form >
                <input type="text" name="fname" placeholder="First Name"/> <br />  <br />
                <input type="text" name="lname" placeholder="Last Name "/> <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Controlled2