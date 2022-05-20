import React from "react";
// creating a function that returns what looks like html but is actually JSX
//JSX function
const Hello = () => {
  //creating JSX method
  //   return <div classname='dummyClass' >Hello Sukriti</div>;
  // };

  //createElement method
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "hello sukriti")
  );
  //return React.createElement("div", null, 'h1', "hello sukriti");
  // if we do the above the h1hello sukriti will be printed, we need to write 2 createElement methods.
  // first parameter is the elment to be rendered, 2nd properties contain additional properties
  // third parameter contains children element.
};

export default Hello;
