import React from "react";

function Column() {
  return (
    // <div> if we use div tag it will show that td cannot be child of div componenent
    //key attribute is the only attribute that can be passed to a fragment
    //<React.Fragment key={item.id}>
    <React.Fragment>
      <td>Name</td>
      <td>vishwas</td>
    </React.Fragment>
    // </div>
  );
}

export default Column;
