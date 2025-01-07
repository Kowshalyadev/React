import React from "react";
import movievedio from "./mainMovievideo.mp4";
import "./mainVedio.css"

function MovieVedio(){
    return(<>
 
    <div className="Main">
        <div className="overlay"></div>
        <video src={movievedio} autoPlay loop muted/>
        <div className="content">
            <h1>Welcome</h1>
            <p>To my Movie sit.</p>
        </div>
    </div>
    </>)
}
export default MovieVedio;