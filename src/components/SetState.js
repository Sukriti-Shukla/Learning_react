import React, { Component } from "react"; //rce + tab gives class component

class SetState extends Component {
  //removing export from before class because we want default export
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    //this.state.count=this.state.count+1;
    //if we use the above syntax the value wont get changed in UI but it will get changed in the console
    //we can use this.state only in the constructor in order to change state ouside it setState has to be used
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callback value", this.state.count);
      }
    ); //set state lets react know that it has to rerender the component
  } //if we want a function tobe called with the new value of the set state parameter pass it as 2nd parameter of set state function
  //if above set state is called 5 times it will increment by only 1 5 times

  //   this.setState(prevState =>({
  //       count: prevState.count+1
  //   }))
  //in above function we pass function as parameter, it will have access to the previous state
  //if called 5 times it will increment value by 5

  render() {
    return (
      <div>
        count- {this.state.count}
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

export default SetState;
