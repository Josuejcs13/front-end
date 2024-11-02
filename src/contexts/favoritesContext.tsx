import { Recipe } from "@/types";
import { createContext } from "react";

type FavoritesContextType = {
  favorites: Recipe[];
  setFavorites: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const FavoritesContext = createContext({} as FavoritesContextType);

export default FavoritesContext;
