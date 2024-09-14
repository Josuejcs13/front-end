import { useState } from "react";
import UserContext from "./userContext";
import { User } from "../types";

type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    token: "",
  });
  const inicialState = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={inicialState}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
