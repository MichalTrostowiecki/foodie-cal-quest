import React, { useState } from "react";
import Navbar from "../Navbar";
import NutritionAnalysis from "../../utils/API/NutritionAnalysis";

const RecipeAnalysis = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const handleFetch = async () => {
        // Sets loading status to true to display loading on the screen for the user
        setIsLoading(true);
        // Clear any existing error prior to fetch
        setError(null);
        // Use search method from "NutritionAnalysis"
        await NutritionAnalysis.search()
            .then(res => {
                setData(JSON.stringify(res.data, null, 2))
                setIsLoading(false);
                console.log(res.data)
            })
            .catch(err => {
                setError(err);
                console.log(err);
                setIsLoading(false);
            });
            
    }

    return (
        <div>
            <Navbar />
            <h1>Recipe Analysis</h1>
            <button onClick={handleFetch}>Fetch Data</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{data}</pre>}
        </div>
    )
}

export default RecipeAnalysis;