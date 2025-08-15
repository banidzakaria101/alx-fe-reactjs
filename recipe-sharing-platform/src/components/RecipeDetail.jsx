import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

import spaghettiImage from '../assets/images/spaghetti.jpg';
import chickenTikkaImage from '../assets/images/chicken-tikka.jpg';
import vegetableImage from '../assets/images/vegetable.jpg';
import classicPancakesImage from '../assets/images/Classic-Pancakes.jpg';

const recipeImages = {
  'spaghetti.jpg': spaghettiImage,
  'chicken-tikka.jpg': chickenTikkaImage,
  'vegetable.jpg': vegetableImage,
  'Classic-Pancakes.jpg': classicPancakesImage,
};

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center text-gray-700 py-10">
        <h1 className="text-2xl font-bold">Recipe not found!</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 block">Go back to Home</Link>
      </div>
    );
  }

  const ingredients = recipe.ingredients || [];
  const instructions = recipe.instructions || [];

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900">{recipe.title}</h1>
          <p className="text-gray-600 mt-2">{recipe.summary}</p>
        </div>
        <div className="flex justify-center mb-6">
          <img
            src={recipeImages[recipe.image.split('/').pop()]}
            alt={recipe.title}
            className="rounded-lg shadow-md w-full max-w-lg object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {ingredients.length > 0 ? (
                ingredients.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No ingredients available.</li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {instructions.length > 0 ? (
                instructions.map((step, index) => <li key={index}>{step}</li>)
              ) : (
                <li>No instructions available.</li>
              )}
            </ol>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/" className="inline-block bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;