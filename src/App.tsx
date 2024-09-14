import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import UserProvider from "./contexts/userProvider";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
