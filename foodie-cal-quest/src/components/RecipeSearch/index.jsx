import React from "react";

import MealType from "../MealType";


const RecipeSearch = () => {

    return (
        <div>
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
