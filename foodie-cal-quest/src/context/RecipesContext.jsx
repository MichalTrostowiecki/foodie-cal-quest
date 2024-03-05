import React, { createContext, useState } from "react";

// Context creation
export const RecipesContext = createContext();

// Context Component Provider
export const RecipesProvider = ( { children }) => {
    
    const [recipesByMealType, setRecipesByMealType] = useState({});
    const [userCalories, setUserCalories] = useState([]);

    // Function to set recipes received from API call
    const addRecipesForMealType = (mealType, newRecipes) => {
        setRecipesByMealType(prevRecipes => ({
            ...prevRecipes,
            [mealType]: newRecipes
        }));
    }

    return (
        <RecipesContext.Provider value={{ recipesByMealType, addRecipesForMealType, userCalories, setUserCalories }}>
        {/* The recipes and addRecipes values are being provided to all
         child components within this context provider */}
            {children}
        </RecipesContext.Provider>
    )
}

