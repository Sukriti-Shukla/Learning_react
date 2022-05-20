import React, { Component } from "react";

class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    /*
     * APPROACH 4
     */
    //short circuit operator
    // this.state.isLoggedIn && <div> Welcome Sukriti </div>
    //this method wont return anything when isLoggedIn is false
    /*
     * APPROACH 3
     */
    return this.state.isLoggedIn ? (
      <div>Welcome Sukriti</div>
    ) : (
      <div>Welcome Guest</div>
    );
    /*
     * APPROACH 2
     */
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Sukriti</div>;
    // } else {
    //   message = <div>Welcome guest</div>;
    // }
    //  return <div>{message}</div>;
    /*
     * APPROACH 1
     */
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome sukriti</div>; //we cannot put if else inside jsx
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default ConditionalRender;
