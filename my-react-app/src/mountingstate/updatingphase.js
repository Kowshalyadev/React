import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";

class UpdatingPhase extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      isLoading: true, // Initial loading state
    };
  }

  componentDidMount() {
    // Simulate a loading delay
    setTimeout(() => {
      this.setState({ isLoading: false }); // Hide spinner after 2 seconds
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.count);
    console.log(this.state);
    if (prevState.count !== this.state.count) {
      console.log(`Count value updated to ${this.state.count}`);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true; // Allow updates
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState, "previous state before update");
    return null;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count, isLoading } = this.state;
    
    if (isLoading) {
      
      // Show spinner while loading
      return (
        
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }
<h1>add spinner if data is not loaded yet
</h1>
    // Show main content after loading
    return (
      <>
        <h1>{count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} disabled={count <= 1}>
          Decrement
        </button>
      </>
    );
  }
}

export default UpdatingPhase;
