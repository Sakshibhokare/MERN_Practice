import React, {useState} from "react";
//rafce arrow function and normal function rfce
const Form=()=>{

    const submitHandle=(e)=>{
        e.preventDefault();
        console.log(userName)
        console.log(email)
        console.log(pass)
        console.log("form submitted sucessfully")
    }

// use with onChange to say that something has changed 
    const changeHandler=()=>{
       console.log("changed something")
    }

    const [userName, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    // instead of writing again and again for diff obj will use 
    const [formData, setFormData]=useState("");

    return(
        <>
        <h1>Cuvette membership form</h1>
{/* when we submit the form the page will get reloaded... this is the common behaviour of a form tag.. and we have to avoid this so will use preventDefault method */}
        <form>
            {/* onChange will reflect the changes and to show the value will use states */}
            <input type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}></input>
            <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="password" onChange={(e)=>{setPass(e.target.value)}}/>
            <button onClick={submitHandle}>Submit</button>
        </form>
        </>
    )
}
//regex: regular expression is used to validate data ex. regex for indian mobile number ... define a pattern 

export default Form;