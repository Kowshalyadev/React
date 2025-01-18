import React from "react";
import Signup from "./signupPage";
import Login from "./loginPages";
// import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routers from './Project/movieproject/routers';

function MovierFinderApp() {
    return (
        <>
       
     
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Routers />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default MovierFinderApp;
