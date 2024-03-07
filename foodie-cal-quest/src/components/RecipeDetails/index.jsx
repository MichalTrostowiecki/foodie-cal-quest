import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from '../../hooks/useRecipes';
import NutritionalLabel from "../NutritionalLabel";
import CalorieResultsRecipes from "../CalorieResultsRecipes"


const RecipeDetails = () => {

    // Decode the url to obtain a name of recipe to later look through our context
    const { mealType, recipeName } = useParams();
    const decodedRecipeName = decodeURIComponent(recipeName);
    // Destructiring state from custom hook "useRecipes"
    const { recipesByMealType } = useRecipes();
    
    // Variable to store details for found recipe
    let recipeDetails = null;

     // Find the recipe in context state
    if(recipesByMealType[mealType]) {
        recipeDetails = recipesByMealType[mealType].find(item => item.recipe.label === decodedRecipeName);
        
    }

    if(!recipeDetails) {
        return <div>Loading...</div>;
    }

    const dietLabels = (recipeDetails) => {

        if(recipeDetails.recipe.dietLabels) {
            return recipeDetails.recipe.dietLabels.map(label => {
                return (
                    <span key={label} className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{label}</span>            )
            })
        }
    }

    const healthLabels = (recipeDetails) => {
        if(recipeDetails.recipe.healthLabels) {
            return recipeDetails.recipe.healthLabels.map(label => {
                return <span key={label} className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{label}</span>

            })
        }
    }

    return (
        <div className='recipeDetails p-4 mx-auto max-w-5xl'>
            <h1 className="text-3xl text-center font-bold mb-6">{recipeDetails.recipe.label}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="max-w-4xl mx-auto p-4">
                    <div className="flex justify-center mb-6">
                        <img src={recipeDetails.recipe.image} alt={recipeDetails.recipe.label} className="max-h-96 rounded-lg shadow-lg" />
                    </div>
                    <div className='mb-5'>
                        <CalorieResultsRecipes nutritionInfo={recipeDetails.recipe}/>
                    </div>
                    <div className='p-3 text-center'>
                        {dietLabels(recipeDetails)}
                    </div>
                    <div className='p-4 m-1 flex flex-wrap justify-center gap-2'>
                        {healthLabels(recipeDetails)}
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                    <ul className="list-disc pl-8 mb-6">
                        {recipeDetails.recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index} className="mb-1 list-none">{ingredient}</li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                    <p className="mb-4">For detailed instructions, visit the recipe on <a href={recipeDetails.recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">the source website</a>.</p>
                </div>
                <div className='mx-auto mt-3'>
                    <NutritionalLabel  nutritionInfo={recipeDetails.recipe}/>
                </div>                
            </div>            
        </div>
    )
}

export default RecipeDetails;