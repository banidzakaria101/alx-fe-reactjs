import { useState } from 'react';
import { useRecipeStore } from '../assets/resipeStore/useRecipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ id: date.now(), title, description});
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            />
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;