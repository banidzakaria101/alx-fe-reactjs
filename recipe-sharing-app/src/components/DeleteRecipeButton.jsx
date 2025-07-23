import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted}) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    const handle = () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            deleteRecipe(recipeId);
            onDeleted();
        }
    };
    return <button onClick={handle}>Delete</button>
};
