import React from "react";
import './index.css';
function UserProfiles(props){
  return(<>
  <div className="user-card-container">
  {/* <img src={props.userDetailes.imageUrl} alt="photo" className="avater"/> */}
  <div className="user-details-container">
    <h1 className="username">{props.userDetailes.name}</h1>
    <p className="user-designation">{props.userDetailes.role}</p>
  </div>
  </div>
 
  </>)
}
export default UserProfiles