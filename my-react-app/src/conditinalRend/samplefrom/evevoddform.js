import React, { Component } from "react";

class EvenOddChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      result: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ number: event.target.value });
  }

  handleSubmit(event) {
    const { number } = this.state;
    const isEven = number % 2 === 0;
    this.setState({
      result: isNaN(number) || number === '' 
        ? "Please enter a valid number." 
        : isEven 
        ? "The number is Even." 
        : "The number is Odd."
    });
    event.preventDefault();
  }

  render() {
    const { number, result } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Even or Odd Checker</h1>
          <label>
            Enter a number:
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <br /><br />
          <input type="submit" value="Check" />
        </form>
        {result && <h2>{result}</h2>}
      </div>
    );
  }
}

export default EvenOddChecker;
