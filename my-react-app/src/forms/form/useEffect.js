import React, {  useEffect, useState } from "react";
import axios from 'axios';
function Useeffects(){
    const[value,setValue]=useState(0)
    const[mes,setMes]=useState("")
    const[cart,setCart]=useState(0)
   
    useEffect(()=>{
        setValue(value+1)
    },[mes])
    const handleValue=()=>{
        setMes(mes)
    }
    useEffect(()=>{
        axios.get("http://fakestoreapi.com/products").then((res)=>{
            setMes(mes+res.data[0].title)
            // console.log(res)
        })
    },[])
    return(<>
    <h1>{value}</h1>
    <h1>{mes}</h1>
    <h1>{cart}</h1>
    <button onClick={handleValue}>click</button>
    </>)
}
export default Useeffects