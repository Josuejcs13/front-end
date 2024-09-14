import { createContext } from "react";
import { User } from "../types";
type UserContextProp = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext({} as UserContextProp);

export default UserContext;
