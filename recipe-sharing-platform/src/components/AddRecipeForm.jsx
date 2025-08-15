import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!summary.trim()) newErrors.summary = 'Summary is required.';
    if (!image.trim()) newErrors.image = 'Image URL is required.';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    if (!instructions.trim()) newErrors.instructions = 'Instructions are required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic
    console.log({
      title,
      summary,
      image,
      ingredients: ingredients.split('\n').filter(item => item.trim()),
      instructions: instructions.split('\n').filter(item => item.trim()),
    });

    // Clear form and show success message
    alert('Recipe submitted successfully!');
    setTitle('');
    setSummary('');
    setImage('');
    setIngredients('');
    setInstructions('');
    setErrors({});
    
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
            <textarea
              id="summary"
              rows="2"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.summary ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {errors.summary && <p className="mt-1 text-sm text-red-500">{errors.summary}</p>}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}
          </div>

          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (one per line)</label>
            <textarea
              id="ingredients"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {errors.ingredients && <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>}
          </div>

          <div>
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions (one step per line)</label>
            <textarea
              id="instructions"
              rows="4"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.instructions ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {errors.instructions && <p className="mt-1 text-sm text-red-500">{errors.instructions}</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;