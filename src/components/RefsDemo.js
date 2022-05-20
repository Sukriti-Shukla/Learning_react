import React, { Component } from "react";
// as soon as the window is opened we want the input feild to be focussed
// this can be done by using refs in 3 simple steps.
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus(); //focus is one of the property of dom object
    console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        {/* next step is attaching ref to the input element */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default RefsDemo;
