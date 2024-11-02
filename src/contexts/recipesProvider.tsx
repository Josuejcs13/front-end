import { Recipe } from "@/types";
import RecipesContext from "./recipesContext";
import { useState } from "react";

type RecipesProviderProp = {
  children: React.ReactNode;
};

function RecipesProvider({ children }: RecipesProviderProp) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const initialState = {
    recipes,
    setRecipes,
  };

  return (
    <RecipesContext.Provider value={initialState}>
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesProvider;
