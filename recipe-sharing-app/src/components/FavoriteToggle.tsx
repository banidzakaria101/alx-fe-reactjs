import { useRecipeStore } from './recipeStore';

const FavoriteToggle = ({ recipeId }) => {
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)}>
      {isFavorite ? '★ Unfavorite' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteToggle;
