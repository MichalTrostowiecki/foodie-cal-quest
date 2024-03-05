import React from "react";

import MealType from "../MealType";


const RecipeSearch = () => {

    return (
        <div className="mt-10">
            <div>
                <MealType mealType={"Breakfast"}/>
                <MealType mealType={"Dinner"} />
                <MealType mealType={"Lunch"} />
                <MealType mealType={"Snack"} />
                <MealType mealType={"Teatime"} />
            </div>
        </div>
    )
}

export default RecipeSearch;
