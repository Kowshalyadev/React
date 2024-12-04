import React,{ Component } from "react";
// import Profilecard from "../profileusingfun/profilecard";
class LifeCycle extends Component{
    constructor(){
        super();
        this.sate={products:[],color:"red"}
    }
    componentDidMount(){
        fetch("https://fakestoreapi.in/api/products?limit=2") 
        .then(res => res.json())
        .then(json => {
            this.setState({products:json})
        })

    }
    static getDerivedStateFromProps(){
        return null;
    }
    render(){
        return(
           <h1>hi</h1>
            // <div>{this.state.products.map((a,b)=>{return(<h1><Profilecard/></h1>)})}</div>
        )
    }
}
export default LifeCycle;