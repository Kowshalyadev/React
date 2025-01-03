import React from "react";
import{useParams} from 'react-router-dom'
function MovieDetails(){
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
    const{id}=useParams();
    const movie=movies.find((a,b)=>a.id===id)
    if(!movie){return(<h1>not found</h1>)}
    return(<>
    <h1>{movie.movies}</h1>
    </>)
}
export default MovieDetails