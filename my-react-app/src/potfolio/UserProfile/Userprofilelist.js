import React, { useState } from "react";
import UserProfiles from "./UseProfile";

const userdetailList = [
    {
        uniqueNo:"1",
        imageUrl: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg",
        name: "Kowshi",
        role: "Software Engineer",
    },
    {
        uniqueNo:"2",
        imageUrl: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg",
        name: "John",
        role: "Software Engineer",
    },
    {
        uniqueNo:"3",
        imageUrl: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg",
        name: "Jane",
        role: "Software Engineer",
    },
];
// searchInput=(e)=>{

// }
function UserProfile() {
    const [searchInput, setSearchInput]=useState("");
    const onChangeSearchInput=(e)=>{
        setSearchInput(e.target.value)
    }
    const filteredUsers = userdetailList.filter((user) =>
        // user.name.toLowerCase().includes(searchInput.toLowerCase())
    user.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );

    return (
        <>
            <div className="list-container">
                <h1 className="title">Users List</h1>
                <input type="search" value={searchInput} onChange={onChangeSearchInput}/>
                <ul className="list-container">
                    {filteredUsers.map((eachItem) => (
                       
                            <UserProfiles userDetailes={eachItem} key={eachItem.uniqueNo} />
                    
                    ))}
                </ul>
            </div>
        </>
    );
}

export default UserProfile;
