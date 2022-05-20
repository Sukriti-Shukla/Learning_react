import React, { Component } from "react";
// we shd have a subscribe button below welcome visitor, on clicking that  button text shd chage to
//thansk for subscribing

class State extends Component {
  //state is always used inside the constructor
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor ",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <button onClick={() => this.changeMessage()}>Subscribe!</button>
      </div>
    );
  }
}

export default State;
