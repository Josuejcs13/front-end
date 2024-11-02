import { useContext, useEffect, useState } from "react";
import useRecipes from "../hooks/useRecipes";
import UserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

import { BsSun } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import ViewCarousel from "@/components/viewCarousel";
import FavoritesContext from "@/contexts/favoritesContext";
import RecipesContext from "@/contexts/recipesContext";

type Greeting = {
  title: string;
  icon: React.ReactNode;
};

function Home() {
  const {
    user: { token, name },
    setUser,
  } = useContext(UserContext);

  const { recipes } = useContext(RecipesContext);

  const { isLoading, getRecipesByPage, } = useRecipes();

  const { favorites } = useContext(FavoritesContext);

  const navigate = useNavigate();

  const [greeting, setGreeting] = useState<Greeting>();

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours < 12) {
      setGreeting({
        title: "Good Morning",
        icon: <BsSun className="text-[#4D8194] text-xl" />,
      });
      return;
    }
    if (hours < 18) {
      setGreeting({
        title: "Good Afternoon",
        icon: <BsSun className="text-[#4D8194] text-xl" />,
      });
      return;
    }
    setGreeting({
      title: "Good Night",
      icon: <IoMoonOutline className="text-[#4D8194] text-xl" />,
    });
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }

    if (!token && !user) {
      navigate("/login");
    }
  }, []);

   useEffect(() => {
     getRecipesByPage();
   }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="justify-center h-screen w-full pt-14 bg-[#f7fafc] text-[#0A2533]">
      <div className="px-6 pb-6">
        <div className="flex items-center gap-1">
          {greeting?.icon}
          <p className="font-medium">{greeting?.title}</p>
        </div>
        <h1 className="capitalize font-bold text-2xl ">{name}</h1>
      </div>
      {/* <input type="text" placeholder="Search Recipe" onChange={handleSearch} /> */}
      <h2 className="font-bold text-xl px-6 pb-2">Popular Recipes</h2>
      <ViewCarousel array={recipes} />
      {favorites.length >= 1 && (
        <>
          <h2 className="font-bold text-xl px-6 pb-2">Favorite Recipes</h2>
          <ViewCarousel array={favorites} />
        </>
      )}
    </div>
  );
}

export default Home;
