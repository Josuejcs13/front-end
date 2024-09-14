import { useContext, useEffect } from "react";
import useRecipes from "../hooks/useRecipes";
import UserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const {
    user: { token },
    setUser,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const { getRecipesByPage } = useRecipes();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }

    if (!token && !user) {
      navigate("/login");
    }
  }, [navigate, token, setUser]);
  useEffect(() => {
    getRecipesByPage();
  }, [getRecipesByPage]);
  return <h1>Hello Home</h1>;
}

export default Home;
