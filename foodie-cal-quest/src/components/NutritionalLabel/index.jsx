import React from "react";
import PropTypes from 'prop-types';
import useNutritionPortion from "../../hooks/useNutritionInfo";

const NutritionalLabel = ({ nutritionInfo }) => {

    // Custom hook to return one portion values from Nutrion Info
    const onePortionSize = useNutritionPortion(nutritionInfo);

    
    return (
       
        // //<!-- https://www.fda.gov/food/food-labeling-nutrition/changes-nutrition-facts-label -->
        <div className="p-1 border-2 border-black font-sans w-72">
            <div className="text-4xl font-extrabold leading-none">Nutrition Facts</div>
            <div className="flex justify-between font-bold border-b-8 border-black">
                <div>Serving size</div><div>{onePortionSize.servingSize}g</div>
            </div>
            <div className="flex justify-between items-end font-extrabold">
                <div>
                    <div className="font-bold">Amount per serving: 1</div>
                    <div className="text-3xl">Calories</div>
                </div>
                <div className="text-2xl">{onePortionSize.calories}</div>
            </div>
            <div className="border-t-4 border-black text-sm pb-1">
                <div className="text-right font-bold pt-1 pb-1">% Daily value*</div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Total Fat</span> {onePortionSize.totalFat}
                    </div>
                    <div className="font-bold">{onePortionSize.totalDailyFat}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>Saturated Fat {onePortionSize.saturatedFat}g</div>
                    <div className="font-bold">{onePortionSize.saturatedFatDaily}%</div>
                </div>
                
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Cholesterol</span> {onePortionSize.cholesterol}
                    </div>
                    <div className="font-bold">{onePortionSize.totalDailyCholesterol}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Sodium</span> {onePortionSize.sodium}
                    </div>
                    <div className="font-bold">{onePortionSize.totalDailySodium}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Total Carbohydrate</span> {onePortionSize.totalCarbohydrate}
                    </div>
                    <div className="font-bold">{onePortionSize.totalDailyCarbohydrate}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div className="pl-4">
                        Dietary Fiber {onePortionSize.dietaryFiber}
                    </div>
                    <div className="font-bold">{onePortionSize.totalDietaryFiber}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="pl-4">
                    Total Sugar {onePortionSize.totalSugar}g
                </div>
                <hr className="border-gray-500"/>
                <div>
                    <span className="font-bold">Protein</span> {onePortionSize.totalProtein}g
                </div>
            </div>
            <div className="border-t-8 border-black pt-1 text-sm">
                <div className="flex justify-between">
                    <div>Vitamin D {onePortionSize.vitaminD}µg</div>
                    <div>{onePortionSize.totalVitaminD}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>Calcium {onePortionSize.calcium}mg</div>
                    <div>{onePortionSize.totalCalcium}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>Iron {onePortionSize.iron}mg</div>
                    <div>{onePortionSize.totalIron}%</div>
                </div>
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>Potassium {onePortionSize.potassium}mg</div>
                    <div>{onePortionSize.totalDailyPotassium}%</div>
                </div>
                <div className="border-t-4 border-black flex leading-none text-xs pt-2 pb-1">
                    <div className="pr-1">*</div>
                    <div>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
                </div>
            </div>
        </div>
    )
}

// props validation
NutritionalLabel.propTypes = {
    nutritionInfo: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        cuisineType: PropTypes.arrayOf(PropTypes.string).isRequired,
        totalWeight: PropTypes.number.isRequired,
        totalDaily: PropTypes.object.isRequired,
        dietLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
        dishType: PropTypes.arrayOf(PropTypes.string).isRequired,
        healthLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
        ingredients: PropTypes.array.isRequired,
        mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
        totalNutrients: PropTypes.object.isRequired,
        totalNutrientsKCal: PropTypes.object,
        yield: PropTypes.number.isRequired
        // Include any other fields you have in nutritionInfo here
    }).isRequired,
};

export default NutritionalLabel;