import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";

// This custom hook provides a way to access the RecipesContext.
// It returns both the current state of recipes and the addRecipes function,
// which can be used to manipulate the recipes state.

export const useRecipes = () => useContext(RecipesContext);