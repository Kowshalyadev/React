import React from "react";
import Usercomp from "./userComp/userscomp";
import Admincomp from "./admin/admins";

function ConditionalRend(props){
    // return props.isLoggedIn?<h1>login successfull</h1>:<h1>login unsuccesfull</h1>
    return props.login==="user"?<Usercomp/>:<Admincomp/>
}
export default ConditionalRend;