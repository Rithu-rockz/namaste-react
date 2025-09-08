import React from "react";
import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Dummy Name",
});

export default userContext;
