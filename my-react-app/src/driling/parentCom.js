import React from "react";
import Child1 from './driling/parentCom';
function Parent(){
    return(<>
    <h1>Parent</h1>
    <Child1 c1="for child1 from parent" c2="or child2 from c1"/>
    </>)
}
export default Parent;