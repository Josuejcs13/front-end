import { BASE_URL } from "@/constants";
import FavoritesContext from "@/contexts/favoritesContext";

import UserContext from "@/contexts/userContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

function useFavorite(id?: number) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { setFavorites, favorites } = useContext(FavoritesContext);

  const {
    user: { token },
  } = useContext(UserContext);

  const favoriteUrl = `${BASE_URL}/favorites/${id}`;

  const addFavorite = async () => {
    try {
      await axios.post(favoriteUrl, {}, { headers: { Authorization: token } });
    } catch (error) {
      console.error(error);
    }
  };
  const removeFavorite = async () => {
    try {
      await axios.delete(favoriteUrl, { headers: { Authorization: token } });
    } catch (error) {
      console.error(error);
    }
  };

  const getAllFavorites = async () => {
    const favoritesUrl = `${BASE_URL}/favorites`;
    try {
      const response = await axios.get(favoritesUrl, {
        headers: { Authorization: token },
      });
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFavorite = () => {
    if (!isFavorite) {
      addFavorite();
    } else {
      removeFavorite();
    }
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    if (favorites && id) {
      setIsFavorite(favorites.some((favorite) => favorite.ID === id));
    }
  }, [favorites, id]);

  useEffect(() => {
    getAllFavorites();
  }, [isFavorite]);

  return {
    handleFavorite,
    isFavorite,
    getAllFavorites,
  };
}

export default useFavorite;
