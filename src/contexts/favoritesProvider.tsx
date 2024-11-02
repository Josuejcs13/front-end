import { Recipe } from "@/types";
import {  useState } from "react";
import FavoritesContext from "./favoritesContext";

type FavoriteProviderProp = {
  children: React.ReactNode;
};

const FavoritesProvider = ({ children }: FavoriteProviderProp) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  
 


  const initialSate = {
    favorites,
    setFavorites,
  };

  return (
    <FavoritesContext.Provider value={initialSate}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
