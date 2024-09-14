import { useState } from "react";
import { Recipe } from "../types";
import axios from "axios";
import { BASE_URL } from "../constants";

function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState<number>(0);
  const getRecipesByPage = async () => {
    const recipesUrl = `${BASE_URL}/recipes/page/${page}`;
    const response = await axios.get(recipesUrl);
    setRecipes(response.data);
  };
  return {
    setPage,
    recipes,
    getRecipesByPage,
  };
}

export default useRecipes;
