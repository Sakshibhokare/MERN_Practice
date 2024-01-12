import React from "react";
//rafce arrow function and normal function rfce
const Form=()=>{

    const submitHandle=(e)=>{
        e.preventDefault();
        console.log("form submitted sucessfully")
    }
    return(
        <>
        <h1>Cuvette membership form</h1>
{/* when we submit the form the page will get reloaded... this is the common behaviour of a form tag.. and we have to avoid this  */}
        <form>
            <input type="text" placeholder="username"></input>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <button onClick={submitHandle}>Submit</button>
        </form>
        </>
    )
}

export default Form;