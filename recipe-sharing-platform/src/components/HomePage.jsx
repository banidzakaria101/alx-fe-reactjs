// src/components/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import recipesData from '../data.json';

// Import local images directly
import spaghettiImage from '../assets/images/spaghetti.jpg';
import chickenTikkaImage from '../assets/images/chicken-tikka.jpg';
import vegetableImage from '../assets/images/vegetable.jpg';
import classicPancakesImage from '../assets/images/Classic-Pancakes.jpg';

// Create a mapping to easily access the imported images
const recipeImages = {
  'spaghetti.jpg': spaghettiImage,
  'chicken-tikka.jpg': chickenTikkaImage,
  'vegetable.jpg': vegetableImage,
  'Classic-Pancakes.jpg': classicPancakesImage,
};

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4">
       <div className="flex justify-between items-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Recipe Gallery</h1>
        <Link
          to="/add-recipe"
          className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Add New Recipe
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={recipeImages[recipe.image.split('/').pop()]}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`} 
                className="block text-center mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;