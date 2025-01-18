import React, { useState } from "react";
import { app } from "../../fbconfig";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login(){
    let route=useNavigate()
    let loginWithFb=getAuth(app)
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log("Login Successful:", { email, pswd });
        // setEmail("")
        // setPswd("")
        try{
            let  loginSuccess=await signInWithEmailAndPassword(loginWithFb,email,pswd);
            // alert("logged in successfully");
            // route("/")
            // console.log(loginSuccess)
if(loginSuccess){
    alert("logged in successfully");
    route("/")
    console.log(loginSuccess)
    
}
else{
    alert("logged succesfully")
}
        }
        catch(err){
            console.log(err)
            alert(err)
        }
    
    }
    return(<>
     <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="enter email here" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder="enter password here" onChange={(e)=>setPswd(e.target.value)} value={pswd}/>
        <button type="submit">Login</button>
        </form>
    </>)
}
export default Login;