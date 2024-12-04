import React,{ Component } from "react";
import "./bulbonoffs.css"
class Offon extends Component{
    constructor(){
        super();
        this.state={on:"true"}
        // this.state={bulbon:"on",normaltext:"turnedof"}
    }
    // handleEvent=()=>{
    //     this.setState({bulbon:this.state.bulbon,this.state.bulbon:"off"})
    
    // }
    handleEvent = () => {
        // this.setState({ bulbon: "off", normaltext: "turnedon" });
        this.setState({on:!this.state.on})
    };
    
    render(){
        return(<>
        <h1>{this.state.on?<h1>off</h1>:<h1>on</h1>}</h1>
        <button onClick={this.handleEvent} className={this.state.on?"swithchon":"swithchoff"}>{this.state.on?<h1>Switch OFF</h1>:<h1>SWITCH ON</h1>}</button>
        </>)
    }
}
export default Offon;