import React from "react";

const destructur = ({ name, heroName }) => {
  //instead of props
  // we can also do {name,heroName}=props
  return (
    //we are bound to enclose all elements in one wrapper tag(div in this case)
    //value of props cannot be changed inside the functional component
    <div>
      <h1>
        Hello {name} {heroName}
      </h1>
    </div>
  );
};

export default destructur;
