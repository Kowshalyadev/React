import React from "react"
import Child2 from './driling/parentCom';
function Child1(props){
    return(<>
    <h1>i am child one</h1>
    <h1>{props.c1}</h1>
    <Child2/>
    </>)

} 
export default Child1;