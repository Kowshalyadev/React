import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function Movielist(){
    const movies=[
        {
            id:"1",
            movie:"pushpa",
            cast:["aa","rashmika","sukumar","fafa"]
        },
        {
            id:"2",
            movie:"devara",
            cast:["NTR","Jahanavi","shiva","prakash raj"]
        },
        {
            id:"3",
            movie:"og",
            cast:["PSPK","Priyanka","sujith","prabhas"]
        },
        {
            id:"4",
            movie:"salaar",
            cast:["Prabhas","shurithi","prashanth nell","prabhas"]
        },
    ]
    return(<>
    {movies.map((a, b) => {
    return (
        <ul key={b}>
            <li>{a.movie}</li>
        </ul>
    );
    
})}

    </>)
}
export default Movielist;