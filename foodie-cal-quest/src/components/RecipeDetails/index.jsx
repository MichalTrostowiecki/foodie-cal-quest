import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from '../../hooks/useRecipes';
import NutritionalLabel from "../NutritionalLabel";


const RecipeDetails = () => {

    // Decode the url to obtain a name of recipe to later look through our context
    const { mealType, recipeName } = useParams();
    const decodedRecipeName = decodeURIComponent(recipeName);
    // Destructiring state from custom hook "useRecipes"
    const { recipesByMealType } = useRecipes();

    console.log(recipesByMealType)
    
    // Variable to store details for found recipe
    let recipeDetails = null;

     // Find the recipe in context state
    if(recipesByMealType[mealType]) {
        recipeDetails = recipesByMealType[mealType].find(item => item.recipe.label === decodedRecipeName);
        console.log("recipeDetails: ", recipeDetails);
    }

    if(!recipeDetails) {
        return <div>Loading...</div>;
    }




    return (
        <div className='flex'>
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-3xl text-center font-bold mb-6">{recipeDetails.recipe.label}</h1>
                <div className="flex justify-center mb-6">
                    <img src={recipeDetails.recipe.image} alt={recipeDetails.recipe.label} className="max-h-96 rounded-lg shadow-lg" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                <ul className="list-disc pl-8 mb-6">
                    {recipeDetails.recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index} className="mb-1">{ingredient}</li>
                    ))}
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                <p className="mb-4">For detailed instructions, visit the recipe on <a href={recipeDetails.recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">the source website</a>.</p>
            </div>
            <div className='mx-auto'>
            <NutritionalLabel  recipeDetails={recipeDetails}/>
            </div>
        </div>
    )
}

export default RecipeDetails;