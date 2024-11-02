import { Recipe } from "@/types";
import { createContext } from "react";

type RecipesContextProps = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const RecipesContext = createContext({} as RecipesContextProps);

export default RecipesContext;
