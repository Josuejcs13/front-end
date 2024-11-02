import { useContext, useState, useCallback } from "react";
import { Recipe } from "../types";
import axios from "axios";
import { BASE_URL } from "../constants";
import RecipesContext from "@/contexts/recipesContext";

function useRecipes() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const { setRecipes } = useContext(RecipesContext);

  const getRecipesByPage = useCallback(async () => {
    setIsLoading(true);
    try {
      const recipesUrl = `${BASE_URL}/recipes/page/${page}`;
      const response = await axios.get(recipesUrl);
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, setRecipes]);

  const getNextRecipes = useCallback(async () => {
    setIsLoading(true);
    try {
      const recipesUrl = `${BASE_URL}/recipes/page/${page + 1}`;
      const response = await axios.get(recipesUrl);
      setRecipes((prev) => [...prev, ...response.data.recipes]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to fetch next recipes:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, setRecipes]);

  const getRecipeById = useCallback(async (id: number) => {
    try {
      const recipeUrl = `${BASE_URL}/recipes/${id}`;
      const response = await axios.get(recipeUrl);
      setRecipe(response.data.recipe);
    } catch (error) {
      console.error(`Failed to fetch recipe with ID ${id}:`, error);
    }
  }, []);

 

  const getRecipesSearched = useCallback(
    async (search: string) => {
      if (!search) {
        await getRecipesByPage();
        return;
      }
      try {
        const response = await axios.get(
          `${BASE_URL}/recipes/search/${search}`
        );
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Failed to search recipes:", error);
      }
    },
    [getRecipesByPage, setRecipes]
  );

  return {
    setPage,
    getRecipesByPage,
    isLoading,
    recipe,
    getRecipeById,
    getRecipesSearched,
    getNextRecipes,
    page,
  };
}

export default useRecipes;
