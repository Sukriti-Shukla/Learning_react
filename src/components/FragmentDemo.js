import React from "react";

function FragmentDemo() {
  return (
    //   <div> <h1>FragmentDemo</h1>
    //   <p>This describes component</p></div>
    //  if we follow the above method of enclosing all elements in an emcloding tag
    //there will be extra div tag in the DOM node, thats when react fragments come into play.
    // React fragments can be used to prevent this extra node to be added into the DOM
    <React.Fragment>
      <div>
        {" "}
        <h1>FragmentDemo</h1>
        <p>This describes component</p>
      </div>
    </React.Fragment>
  );
}

export default FragmentDemo;
