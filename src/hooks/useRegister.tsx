import axios from "axios";
import { registerData } from "../schemas/registerSchema";
import { BASE_URL } from "../constants";

const useRegister = () => {
  const registerUrl = `${BASE_URL}/register`;
  const createUser = async (data: registerData) => {
    await axios.post(registerUrl, data);
  };
  return {
    createUser,
  };
};
export default useRegister;
