import React, { useState } from "react";
function Form(){
    const [formData,setformdata]=useState(
       { user:""}
    )
    const handle=(e)=>{
        let {name,value}=e.target;
    }
    return(<>
    <input type="text" name="user" value={formData.user}/>
    <button onClick={handle}>click</button>
    </>)
}
export default Form;