import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">All Recipes</Link>
        <Link to="/add">Add</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/recommendations">Recommendations</Link>
      </nav>
      <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route
          path="/add"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;