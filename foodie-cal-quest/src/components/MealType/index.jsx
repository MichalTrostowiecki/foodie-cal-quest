import React, { useState } from "react";
import API from "../../utils/API";
import RecipeSearchForm from "../RecipeSearchForm";
import RecipeCard from "../RecipeCard";
import PropTypes from "prop-types";



//Importing our custom hook to setRecipes with fetch data from API
import { useRecipes } from "../../hooks/useRecipes"

const MealType = ( { mealType } ) => {

    let query = "";

    const { recipesByMealType, addRecipesForMealType } = useRecipes();
    const [userOptions, setUserOptions] = useState(null);
    const [showGetMeal, setShowGetMeal] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(!isLoading)
        API.searchRecipe(query)
            .then(resp => {
                // addRecipes is a function coming from our custom hook
                addRecipesForMealType(mealType, resp.data.hits)
                setIsLoading(false)
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

    const formClasses = showForm ? 'form-visible' : 'form-hidden';


    return (
        <div className="mealType border w-11/12 md:w-3/4 mx-auto md:p-5 p-8 rounded-xl max-w-7xl m-4">
            <span className="bold text-2xl">{mealType}</span>
            
            <div className="mt-2" >
                <button className={` bg-transparent hover:bg-green-500 text-sm text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded
                 ${showGetMeal ? "" : "hidden"}`}
                 onClick={handleGetMeal}>Get Meals</button>
                
                    <div className={`${formClasses}`}>
                        <RecipeSearchForm
                                    showForm={showForm}
                                    onSubmit={onSubmit} handleSearchRecipe={handleSearchRecipe} 
                                    handleGetMeal={handleGetMeal}/>
                    </div>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3">
                {recipesByMealType[mealType] ? recipesByMealType[mealType].map((recipe, index) => (
                    <RecipeCard key={index} data={recipe} mealType={mealType}/>
                )) : ""}
                {isLoading ? "Data is loading" : ""}
            </div>
        </div>
    )
}


export default MealType;

MealType.propTypes = {
    mealType: PropTypes.string.isRequired,
}