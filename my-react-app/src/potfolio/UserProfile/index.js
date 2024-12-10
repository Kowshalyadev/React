import React from "react";
import './index.css'
function UserProfile(props){
//     const {userDetail} = props
//   const {image, name, role, key} = userDetail
    return(<div className="user-card-container">
    <img src={props.userDetail.image} alt="img" className="avater"/>
    <div className="user-details-containe">
        <h1 className="username">{props.userDetail.name}</h1>
        <p className="user-designation">{props.userDetail.role}</p>
    </div>
    </div>)
}
export default UserProfile
