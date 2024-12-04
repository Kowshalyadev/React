import React,{ Component } from "react";
class UpdatingPhase extends Component{
    constructor(){
        super()
        this.state={count:1}
    }
    componentDidUpdate(pvsProps,prvsState){
        console.log(prvsState.count)
        console.log(this.state)
        // if(prvsState.count!==this.state.count){
        //     console.log(`count value updateted ${this.sate.count}`)
        // }

    }
    // shouldComponentUpdate(pvsProps,prvsState){
    //     if(this.sate.count===10){
    //         return true;

    //     }
    //     else{
    //         return true
    //     }
           
    // }
    // getSnapshotBeforeUpdate(prveProps,prevsState){
    //     console.log(prevsState,"preveious Update")
    //     return null

    // }
    increment=()=>{
        this.setState({count:this.state.count+1})

    }
    decrement=()=>{
        this.setState({count:this.state.count-1})

    }
    render(){
        const {count}=this.state
        return(<>
        <h1>{count}</h1>
        <button onClick={this.increment}>increments</button>
        <button onClick={this.decrement} disabled={count<=1}>decrement</button>
        </>)
    }
}
export default UpdatingPhase;