import React,{ Component } from "react";
class Counter extends Component{
    
    constructor(){
        super();
        this.state={counter:0,color:"green"}
    }
    handleEvent=()=>{
        this.setState({counter:this.state.counter+1,color:"black"})
    
    }
    handleEvent1=()=>{
        this.setState({counter:this.state.counter+3,color:"white"})
    
    }
    handleEvents=()=>{
        this.setState({counter:this.state.counter-1,color:"yellow"})
    
    }
    handleEvents3=()=>{
        this.setState({counter:this.state.counter-3,color:"red"})
    
    }
    

    render(){
        return(<>
        <div style={{
            display:"grid",
            justifyContent:"center",
            backgroundColor:"lightpink",
            borderRadius:"12px",
            padding:"12px",
            gap:"12px"
        }

        }>
        
        <button onClick={this.handleEvent} style={{border:"0px",height:"10vh",width:"10vh",borderRadius:"12px", backgroundColor:"lightblue"}}>+</button>
        <button onClick={this.handleEvent1} style={{border:"0px",height:"10vh",width:"10vh",borderRadius:"12px", backgroundColor:"lightblue"}}>+3</button>
        <h1 style={{color:this.state.color}}>The current count is:<br/>{this.state.counter}</h1>
        <button onClick={this.handleEvents} style={{border:"0px",height:"10vh",width:"10vh",borderRadius:"12px", backgroundColor:"lightblue"}}>-1</button>
        <button onClick={this.handleEvents3} style={{border:"0px",height:"10vh",width:"10vh",borderRadius:"12px", backgroundColor:"lightblue"}}>-3</button>
        </div>
        </>)
    }

}
export default Counter;