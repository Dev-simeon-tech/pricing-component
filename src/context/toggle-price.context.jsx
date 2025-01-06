import { Children, useState } from "react";
import { createContext } from "react";

export const TogglePriceContext = createContext({
  priceType: "annually",
  setPriceType: () => {},
});

export const TogglePriceProvider = ({ children }) => {
  const [priceType, setPriceType] = useState("monthly");

  const value = {
    priceType,
    setPriceType,
  };
  return (
    <TogglePriceContext.Provider value={value}>
      {children}
    </TogglePriceContext.Provider>
  );
};
