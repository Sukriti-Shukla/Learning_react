import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sukriti",
    };
  }

  componentDidMount() {
    setInterval(() => {
      //only regular and parent component will get re rendered and pure component wont get rerendered unless there is any change in state.
      this.setState({
        name: "sukriti",
      });
    }, 2000);
  }
  render() {
    console.log("***Parent comp render***");
    return (
      <div>
        ParentComp
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
