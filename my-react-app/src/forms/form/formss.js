
import React, { useState } from "react";
function Form(){
    const [formData,setformData]=useState({
        user:"",
        Mobile:"",
        email:""
        
    })
    setformData()
    // const [result,setResult]=useState("")
    // const handleInput=(e)=>{
    // //    let {name,value,type}=e.target;
    // //    setformData((a)=>{})
       

    // }
    const handleSubmit=(e)=>{
        e.preventDefault()
       

    }
    return(<>
    <form onSubmit={handleSubmit}>
    <input type="text" name="user" value={formData.user} onChange={handleInput}/><br/><br/>
    <input type="text" name="mobile" value={formData.Mobile} onChange={handleInput}/><br/><br/>
    <input type="email" name="email" value={formData.email} onChange={handleInput}/><br/><br/>
    <button type="submit">click</button>
    </form>
    <h1>{result}</h1>
    </>)
}
export default Form;