import React, { useState, createContext } from "react";
import { json } from "react-router-dom";

//context
export const RegistrationContext = createContext();

const Registration = ({ children }) => {
  const [isSigh, setIsSigh] = useState(
    window.sessionStorage.getItem("isSigh") === "true" || false
  );
  const [customerRequestID, setCustomerRequestID] = useState(
    window.sessionStorage.getItem("customerRequestID") || false
  );
  return (
    <RegistrationContext.Provider
      value={{
        isSigh,
        setIsSigh,
        customerRequestID,
        setCustomerRequestID,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default Registration;
