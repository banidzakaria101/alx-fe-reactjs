import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }), 
  updateRecipe:(update) => set((state) => ({
    recipes: state.recipes.map((recipe) => recipe.id === update.id ? { ...recipe, ...update} : recipe),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  }))

}));
