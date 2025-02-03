import React from "react";
import Signup1 from "../signup/signup.js";
// import Login from "../login/login.js";
// import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRouterss from "../../Project/movieproject/routersS.js";


function MovierFinderApps() {
    return (
        <>
       
     
        <Router>
            <Routes>
                {/* <Route path="/" element={<AllRouterss />} /> */}
                <Route path="/" element={<Signup1 />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/dashboard" element={<AllRouterss />} />
            </Routes>
        </Router>
        </>
    );
}

export default MovierFinderApps;
