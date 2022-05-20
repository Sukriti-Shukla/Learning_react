import React, { Component } from "react";
import RefsClass from "./RefsClass";

class refsClassPar extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <RefsClass ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    );
  }
}

export default refsClassPar;
