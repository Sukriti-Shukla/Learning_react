import React, { Component } from "react";
import LifecycleMountB from "./LifecycleMountB";

class LifecycleMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sukriti",
    };
    console.log("Mount constructor");
  }

  static getDerivedStateFromProps(props, state) {
    //if we dont include static keyword the method will be ignored
    console.log("mount getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("mount componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "shukla",
    });
  };
  render() {
    console.log("mount-render");
    return (
      <div>
        <div>LifecycleMount</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleMountB />
      </div>
    );
  }
}

export default LifecycleMount;
