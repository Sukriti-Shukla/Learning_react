import React from "react";

function EventHandeling() {
  function clickHandler() {}
  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  ); // do not add parenthesis on function as it is a function and not a function call.
}

export default EventHandeling;
