import React, { useState } from "react";
import Navbar from "../Navbar";
import NutritionAnalysis from "../../utils/API/NutritionAnalysis";
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
        setShowLabel(true)

        // setIsLoading(true);
        // // Clear any existing error prior to fetch
        // setError(null);
        // // Use search method from "NutritionAnalysis"
        // await NutritionAnalysis.search()
        //     .then(res => {
        //         setData(JSON.stringify(res.data, null, 2))
        //         setIsLoading(false);
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
            {/* <Navbar /> */}
            <h1>Recipe Analysis</h1>
            <button onClick={handleFetch}>Fetch Data</button>
            {showLabel ? <NutritionalLabel data={data}/> : ""}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    )
}

export default RecipeAnalysis;