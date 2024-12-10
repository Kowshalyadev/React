import React,{ Component } from "react";
class Samplefrom extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {
            name: '',
            password: '',
            email: ''};  
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
    }  
    handleChange(event) { 
        const {name,value}=event.target 
        this.setState({[name]:value});  
    }  
    handleSubmit(event) {  
        const { name, password, email } = this.state;
        alert(`You have submitted the form successfully:\nName: ${name}\nPassword: ${password}\nEmail: ${email}`);
        event.preventDefault(); 
    }  
    render() { 
        const { name, password, email } = this.state; 
        return (  
            <form onSubmit={this.handleSubmit}>  
              <h1>Controlled Form Example</h1>  
              <label>  
                  Name:  
                  <input type="text" name="name" value={name} onChange={this.handleChange} /><br/><br/>
                  Password:  
                  <input type="password" name="password" value={password} onChange={this.handleChange} /> <br/><br/> 
                  Email:  
                  <input type="email" name="email" value={email} onChange={this.handleChange} /><br/><br/>
              </label><br/><br/>
              <input type="submit" value="Submit" />  
           </form>  
        );  
    }  
  }  
export default Samplefrom;




 