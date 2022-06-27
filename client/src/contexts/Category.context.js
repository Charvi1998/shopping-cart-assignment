import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext({
  categories: [],
});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const updateCategory = async () => {
      let categoryData = await fetch("http://localhost:5000/categories");
      let parsedCategories = await categoryData.json();
      let sortedCategories = parsedCategories
        .filter((category) => category.enabled)
        .sort((a, b) => a.order - b.order);
      setCategories(sortedCategories);
    };

    updateCategory();
  }, []);

  const value = { categories };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
