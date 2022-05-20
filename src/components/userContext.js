import React from "react";

const UserContext = React.createContext("Default name");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumerexport;

export { UserProvider, UserConsumer };
