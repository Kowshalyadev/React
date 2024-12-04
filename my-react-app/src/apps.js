import React from "react";
import BasicExample from "./potfolio/reactpotfolio";
import Home from "./potfolio/home";
import Aboutus from "./potfolio/Aboutus";
import Contactus from "./potfolio/contactus";


function App() {
  let component; // Fix spelling from 'componet' to 'component'
  
  // Dynamically set the component based on the URL path
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/Aboutus":
      component = <Aboutus />;
      break;
      case "/Contactus":
      component = <Contactus />;
      break;
    default:
      component = <h1>Welcome to the Potfolio</h1>; // Default route
  }

  return (
    <>
      <BasicExample />
      {component} 
    </>
  );
}

export default App;
