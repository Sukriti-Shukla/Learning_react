import React, { Component } from "react";

class LifecycleMountB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sukriti",
    };
    console.log("Mount constructorB");
  }

  static getDerivedStateFromProps(props, state) {
    //if we dont include static keyword the method will be ignored
    console.log("mount getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("mount componentDidMountB");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdateB");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdateB");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdateB");
  }
  render() {
    console.log("mount-renderB");
    return <div>LifecycleMount</div>;
  }
}

export default LifecycleMountB;
