import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";
import { UserContext } from "./user.context";

//creating context state - step 1
export const ProductsContext = createContext({
  products: [], //step2_1- store what you want have as the default/initial value
});

//creating context state provider - step 1
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS); // step2_2- create/store state using usestate for the context default value(previous step)
  const value = { products }; //step3- assign a const eg.value the value of current state.
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider> //step4 pass the value in step three as prop to context.provider
  );
};
