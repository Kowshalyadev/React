import React, { useState,setRomdom } from "react";
// import Display from "./Display";
function Counter(){
    const [value,setvalue]=useState(0)
    // const [values,setvalues]=setRomdom(0)
    const handle=()=>{
        setvalue(value+1)
    }
    const handles=()=>{setRomdom(Math.random())}

    return(
        <>
        <button onClick={handle}>increment</button>
        <button onClick={handles}>increment</button>
        {/* <h1>{value}</h1> */}
        {/* <Display value={value}/> */}
        </>
    )
}
export default Counter