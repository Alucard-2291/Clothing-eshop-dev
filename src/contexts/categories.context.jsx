import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

//creating context state - step 1
export const CategoriesContext = createContext({
  categoriesMap: {}, //step2_1- store what you want have as the default/initial value
});

//creating context state provider - step 1
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({}); // step2_2- create/store state using usestate for the context default value(previous step)

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap }; //step3- assign a const eg.value the value of current state.

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider> //step4 pass the value in step three as prop to context.provider
  );
};
