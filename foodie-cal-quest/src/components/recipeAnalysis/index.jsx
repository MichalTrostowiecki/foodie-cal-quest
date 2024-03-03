import React, { useState } from "react";
import NutritionAnalysis from "../../utils/API";
import NutritionalLabel from "../NutritionalLabel";
import sampleData from "../../../../sampleData.json"

const RecipeAnalysis = () => {
    // State for data we receive from API call
    const [data, setData] = useState(null);
    // State to display information to the user that data is being received
    const [isLoading, setIsLoading] = useState(false);
    // In case of an error display to the user what went wrong
    const [error, setError] = useState(null);
    // State to show/hide label
    const [showLabel, setShowLabel] = useState(false)
   
    const handleFetch = async () => {
        // Sets loading status to true to display loading on the screen for the user

        // I need to employ static data tomorrow
        // Use static data to limit API calls
        setData(sampleData);
       
        setShowLabel(true);

        // setIsLoading(true);
        // // Clear any existing error prior to fetch
        // setError(null);
        // // Use analyseRecipe method from "NutritionAnalysis"
        // await NutritionAnalysis.analyseRecipe()
        //     .then(res => {
        //         setData(res.data);
        //         setIsLoading(false);
        //         setShowLabel(true)
        //         console.log(res.data)
        //     })
        //     .catch(err => {
        //         setError(err);
        //         console.log(err);
        //         setIsLoading(false);
        //     });
            
    }
    

    return (

        // <pre> tag is used to display preformatted text in HTML, preserving spaces and line breaks.
        <div>
            <h1>Recipe Analysis</h1>
            <button onClick={handleFetch}>Fetch Data</button>
            {showLabel ? <NutritionalLabel nutritionInfo={data}/> : ""}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    )
}

export default RecipeAnalysis;