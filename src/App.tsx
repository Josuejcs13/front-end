import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import UserProvider from "./contexts/userProvider";
import FavoritesProvider from "./contexts/favoritesProvider";

import RecipesProvider from "./contexts/recipesProvider";

function App() {
  return (
    <RecipesProvider>
      <FavoritesProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </FavoritesProvider>
    </RecipesProvider>
  );
}

export default App;
