import create from 'zustand';

const useRecipeStore = create (set => ( {
    recipes: [],
    addRecipe: (newRecipe) => set (state => ({
        recipies : [...state.recipes, newRecipe]
    })),
    setRecipie: (recipes) => set({ recipes })
}));

export default useRecipeStore;