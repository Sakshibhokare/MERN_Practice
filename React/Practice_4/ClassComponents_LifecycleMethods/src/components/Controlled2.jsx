import React, { useState } from "react";
//if we have multiple things in a form 
function Controlled2(){

    // if you dont want to create multiple state veriables we can do it as follow
    let [values, setValues] = useState({
        fname:'',
        lname:''
    })

    const chnageHandler=(e)=>{
        let {name, value}=e.target;


//this function is use to set or update the state
        setValues({
       //this will represent all properties of object     
        ...values,
        [name]:value
        })
    }
    return (
        <div>
            <h1>Controlled component [multiple input from form]</h1>

            <form >
                <input type="text" name="fname" value={values.fname} onChange={chnageHandler} placeholder="First Name"/> <br />  <br />
                <input type="text" name="lname" value={values.lname} onChange={chnageHandler} placeholder="Last Name "/> <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Controlled2