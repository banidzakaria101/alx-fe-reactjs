import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
    const {id} = useParams();
    const recipeId = Number(id);
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id ===recipeId));
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    if (!recipe)  return <p>Recipe non found</p>;

    return (
        <div>
            {isEditing ? (
                <EditRecipeForm recipe={recipe} onFinish={() => setIsEditing(false)} />
            ) : (
                <>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <DleteRecipeButton 
                recipeId={recipeId}
                onDeleted={ () => navigate('/')}/>
                </>
            )}
        </div>
    );
};

export default RecipeDetails;