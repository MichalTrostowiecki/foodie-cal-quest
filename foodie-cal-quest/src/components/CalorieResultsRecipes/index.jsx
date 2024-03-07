import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useNutritionPortion from "../../hooks/useNutritionInfo";

const CalorieResultsRecipes = ({ nutritionInfo }) => {

    // Using custom hook to get one portion values for a recipe
    const onePortion = useNutritionPortion(nutritionInfo)
 
    // Calculating calories for each macro based on grams of each
    const proteinCalories = onePortion.totalProtein * 4;
    const carbsCalories = onePortion.totalCarbohydrate * 4;
    const fatsCalories = onePortion.totalFat * 9;

    // Calculating total % of total Calories
    const proteinCalPercentage = (proteinCalories / onePortion.calories) * 100;
    const carbsCalPercentage = (carbsCalories / onePortion.calories) * 100;
    const fatsCalPercentage = (fatsCalories / onePortion.calories) * 100;

    return (
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto p-2">
            <div className="w-15 h-15 md:w-20 md:h-20 mx-auto">
                <p className="text-center font-semibold">Calories:</p>
                <div className="flex justify-center">
                    <CircularProgressbar
                        value={onePortion.calories || 0}
                        text={`${Math.round(onePortion.calories)}kcal`}
                        styles={buildStyles({
                            pathTransitionDuration: 0.5,
                            textColor: '#4a5568',
                            pathColor: '#48bb78',
                            trailColor: '#cbd5e0',
                        })}
                    />
                </div>
            </div>
            <div className="w-15 h-15 md:w-20 md:h-20 mx-auto">
                <p className="text-center font-semibold">Protein:</p>
                <div className="flex justify-center">
                    <CircularProgressbar
                        value={proteinCalPercentage}
                        text={`${onePortion.totalProtein}g`}
                    />
                </div>
            </div>
            <div className="w-15 h-15 md:w-20 md:h-20 mx-auto">
                <p className="text-center font-semibold">Carbs:</p>
                <div className="flex justify-center">
                    <CircularProgressbar
                        value={carbsCalPercentage}
                        text={`${onePortion.totalCarbohydrate}g`}
                    />
                </div>
            </div>
            <div className="w-15 h-15 md:w-20 md:h-20 mx-auto">
                <p className="text-center font-semibold">Fats:</p>
                <div className="flex justify-center">
                    <CircularProgressbar
                        value={fatsCalPercentage}
                        text={`${onePortion.totalFat}g`}
                    />
                </div>
            </div>

    </div>
    );
};

export default CalorieResultsRecipes;

