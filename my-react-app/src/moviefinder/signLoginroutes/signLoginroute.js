import React from "react";
import Signup from "../signup/signup.js";
import Login from "../login/login.js";
// import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AllRouterss from "../../Project/movieproject/routers.js";

function MovierFinderApps() {
    return (
        <>
       
     
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<AllRouterss />} /> */}
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default MovierFinderApps;
