import { Component } from "react";
import Footer from "./footer";
import Headercomp from "./headerComp";
import Main from "./maincomp";
class Home extends Component{
    render(){
        return(
            <div>
            <Headercomp/>
            <Main/>
            <Footer/>
            </div>
        )
    }
}
export default Home;