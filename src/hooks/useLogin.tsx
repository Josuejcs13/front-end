import axios from "axios";
import { loginData } from "../schemas/loginSchema";
import { BASE_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

const useLogin = () => {
  const { setUser } = useContext(UserContext);
  const login = async (data: loginData) => {
    const loginUrl = `${BASE_URL}/login`;
    const response = await axios.post(loginUrl, data);
    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  };
  return {
    login,
  };
};

export default useLogin;
