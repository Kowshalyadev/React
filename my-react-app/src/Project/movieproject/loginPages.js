import React, { useState } from "react";
function Login(){
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Login Successful:", { email, pswd });
        setEmail("")
        setPswd("")
    
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