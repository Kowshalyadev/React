import React, { useState } from "react";
function Counterfun(){
    const[value,setvalue]=useState(0)
    const increment=()=>{
        setvalue(value+1)
    }
    const decrement=()=>{
        setvalue(value-1)
    }
    return(<>
        <h1 style={{alignContent:"center"}}>counter comp using functional component
        </h1>
        <h1>{value}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </>)
}
export default Counterfun