import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

export const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState("");

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <ToggleContext.Provider value={{ toggle, updateToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
