import React from "react";

const Props = (props) => {
  return (
    //we are bound to enclose all elements in one wrapper tag(div in this case)
    //value of props cannot be changed inside the functional component
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};

export default Props;
