import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { app } from "../../fbconfig";
function Signup(){
    const signUpDoneWithFb=getAuth(app) 
    const navigate=useNavigate()
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            let a=await createUserWithEmailAndPassword(signUpDoneWithFb,email,pswd);
            alert("signup");
            console.log(a)

        }
        catch(err){
            console.log(err)
        }
        navigate("/login")
        setEmail("")
        setPswd("")

    }
    return(<>
        <h1>SIGNUP</h1>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="enter email here" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder="enter password here" onChange={(e)=>setPswd(e.target.value)} value={pswd}/>
        <button type="submit">Signup</button>
        </form>
        </>)
        
}
export default Signup;