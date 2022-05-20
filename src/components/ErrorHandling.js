import React from "react";

function ErrorHandling({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("not a hero");
  }
  return <div>{heroName}</div>;
}

export default ErrorHandling;
