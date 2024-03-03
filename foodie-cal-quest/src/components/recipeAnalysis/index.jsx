import React, { useState } from "react";
import NutritionAnalysis from "../../utils/API";
import NutritionalLabel from "../NutritionalLabel";
import sampleData from "../../../../sampleData.json"
import ErrorAlert from "../ErrorAlert";

const RecipeAnalysis = () => {
    // State for data we receive from API call
    const [data, setData] = useState(null);
    // State to display information to the user that data is being received
    const [isLoading, setIsLoading] = useState(false);
    // In case of an error display to the user what went wrong
    const [error, setError] = useState(null);
    // State to show/hide label
    const [showLabel, setShowLabel] = useState(false)
    const [textAreaValue, setTextAreaValue] = useState(null);
    const [showError, setShowError] = useState(false)
   
    const handleGetCalories = async () => {
        
        // I need to employ static data tomorrow
        // Use static data to limit API calls
        //setData(sampleData);
       
        // setShowLabel(true);

        // setIsLoading(true);
        // // Clear any existing error prior to fetch
        // setError(null);
        // // Use analyseRecipe method from "NutritionAnalysis"
        if(textAreaValue === null) {
            setShowError(true);
            return
        }
        await NutritionAnalysis.analyseRecipe(textAreaValue)
            .then(res => {
                setData(res.data);
                setIsLoading(false);
                setShowLabel(true);
                setError(null); // Clear any previous errors
                setShowError(false); // Hide the error alert if it was shown
                console.log(res.data);
            })
            .catch(err => {
                const message = err.response?.data?.message || "An unexpected error occurred. Please try again.";
                setError(message); // Set a user-friendly error message
                setShowError(true); // Utilize showError state for API errors too
                setIsLoading(false);
            });
        
    }

    

    return (

        
        <div className="mx-auto max-w-4xl p-5">
            <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white my-6">Recipe Analysis</h1> {/* Center the title, increase its size, and add margin */}
            {showError && <ErrorAlert errorMessage={error} setShowError={setShowError} />}
            <div className="flex flex-col md:flex-row justify-around gap-4"> {/* Stack elements vertically on mobile, switch to horizontal on larger screens */}
            
                <div >
                    <label htmlFor="recipeArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Recipe</label>
                    <textarea
                        placeholder="Copy your recipe here..."
                        onChange={(e) => {
                            setTextAreaValue(e.target.value);
                            if (showError && e.target.value.trim() !== '') {
                                setShowError(false);
                            }
                        }}
                        id="recipeArea"
                        rows="10"
                        className="block p-5 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                    </textarea>
                </div>
                <div className="p-5 mx-auto">
                    {/* Conditional rendering for nutritional label */}
                    {showLabel ? <NutritionalLabel nutritionInfo={data}/> : ""}
                </div>
            </div>

            <button
                className=" mt-4 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleGetCalories}
            >
                Get Calories
            </button>

            {isLoading && <p className="text-center mt-2">Loading...</p>}
        </div>

    )
}

export default RecipeAnalysis;