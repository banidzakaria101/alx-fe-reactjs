import { useState }from 'react';

const EditRecipeForm = ({ recipe, onFinish }) => {
    const [title, setTitle] =useState(recipe.title);
    const[description, setDescription] = useState(recipe.description);
    const updateRecipe = useReactStore((state) => state.updateRecipe);

    const handllesubmit = (e) => {
        e.preventDefault();
        updateRecipe({id: recipe.id, title, description});
        onFinish();
    };

    return (
        <form onSubmit={handllesubmit}>
            <input value={title}
            onChange={(e) => setTitle(e.target.value)} />
            <textarea value={description}
            onChange={(e) => setDEscription(e.target.value)} />
            <button type='submit'>save</button>
            <button type='button' onClick={onFinish}>Cancel</button>
        </form>
    );
};

export default EditRecipeForm;