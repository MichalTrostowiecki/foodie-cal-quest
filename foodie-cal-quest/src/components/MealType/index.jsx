import React, { useState } from "react";
import API from "../../utils/API";
import RecipeSearchForm from "../RecipeSearchForm";

const MealType = ( { mealType } ) => {

    let query = "";
    const [recipes, setRecipes] = useState([]);
    const [userOptions, setUserOptions] = useState(null);
    const [showGetMeal, setShowGetMeal] = useState(true);
    const [showForm, setShowForm] = useState(false);


    const onSubmit = (formData) => {
        setUserOptions(formData);
        query = optionsToQuery(formData);

    }

    const handleGetMeal = () => {
        setShowGetMeal(!showGetMeal);
        setShowForm(!showForm);
    }

    const handleSearchRecipe = () => {
        setShowForm(!showForm);
        
        API.searchRecipe(query)
            .then(resp => {
                setRecipes(resp.data)
                console.log(resp.data)
            })
            .catch(err => console.log(err));
    }

    // Function to turn user object into query parameters
    const optionsToQuery = (params) => {
        const searchParams = new URLSearchParams();

        // Iterate over the object entries
        for (const [key, value] of Object.entries(params)) {
            if(Array.isArray(value)) {
                // If value is an array, for multiple options value is array so append each item seperately
                value.forEach(item => searchParams.append(key, item));
            } else {
                searchParams.set(key, value);
            }
        }
        return searchParams;
    }


    return (
        <div className="border w-3/4 mx-auto">
            {mealType}
            <div>
                <button className={showGetMeal ? "" : "hidden"} onClick={handleGetMeal}>Get Meal</button>
                {showForm ? <RecipeSearchForm onSubmit={onSubmit} handleSearchRecipe={handleSearchRecipe}/> : null}
            </div>
            <div>
                {}
            </div>
        </div>
    )
}


export default MealType;