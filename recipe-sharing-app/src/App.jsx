import { useState } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipeForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RecipeList />
      </div>
      <div>
        <AddRecipe />
      </div>
    </>
  );
}

export default App;
