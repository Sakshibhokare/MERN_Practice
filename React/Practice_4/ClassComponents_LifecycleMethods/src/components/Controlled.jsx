import React, {useState} from "react";

function Controlled(){
    let [fname, setFName] = useState('');
    let [lname, setLName] = useState('');

    const handleFnameChange=(e)=>{
        setFName(e.target.value)
    }
    const handleLnameChange=(e)=>{
        setLName(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('form submitted sucessfully')
    }
    return (
        <div>
            <h1>Controlled component</h1>

            <form>
                <input type="text" value={fname} onChange={handleFnameChange} name="fname" placeholder="First Name"/>
                <input type="text" value={lname} onChange={handleLnameChange} name="lname" placeholder="Last Name" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Controlled