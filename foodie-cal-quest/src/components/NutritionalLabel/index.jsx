import React from "react";
import PropTypes from 'prop-types';

const NutritionalLabel = ({ nutritionInfo }) => {
    // Initialize your variables here


    // Now assign the values from the chosen source
    
    const { 
        calories, 
        totalWeight, 
        totalDaily, 
        totalNutrients, 
     } = nutritionInfo;

     const portionSize = nutritionInfo.yield;
    

    const roundNumber = (num) => {
        return Math.round(num)
    }

    let macros = {
        calories: calories,
        totalFat: totalNutrients.FAT.quantity,
        totalDailyFat: totalDaily.FAT.quantity,
        saturatedFat: totalNutrients.FASAT.quantity,
        saturatedFatDaily: totalDaily.FASAT.quantity,
        cholesterol: totalNutrients.CHOLE.quantity,
        totalDailyCholesterol: totalDaily.CHOLE.quantity,
        sodium: totalNutrients.NA.quantity,
        totalDailySodium: totalDaily.NA.quantity,
        totalCarbohydrate: totalNutrients.CHOCDF.quantity,
        totalDailyCarbohydrate: totalDaily.CHOCDF.quantity,
        dietaryFiber: totalNutrients.FIBTG.quantity,
        totalDieteryFiber: totalDaily.FIBTG.quantity,
        totalSugar: totalNutrients.SUGAR.quantity,
        totalProtein: totalNutrients.PROCNT.quantity,
        vitaminD: totalNutrients.VITD.quantity,
        totalVitaminD: totalDaily.VITD.quantity,
        calcium: totalNutrients.CA.quantity,
        totalCalcium: totalDaily.CA.quantity,
        iron: totalNutrients.FE.quantity,
        totalIron: totalDaily.FE.quantity,
        potassium: totalNutrients.K.quantity,
        totalDailyPotassium: totalDaily.K.quantity,
    }

    // Function to calculate label macros for 1 portion
    const getOnePortion = (macros) => {
        if(portionSize > 1) {
            let newMacro = {};
            for (let key in macros) {
                newMacro[key] = Math.round(macros[key] / portionSize);
            }
            return newMacro
        } else {
            let newMacro = {};
            for (let key in macros) {
                newMacro[key] = Math.round(macros[key])
            }
            return newMacro
        }
    }
    // New Macros based on 1 portion
    const onePortionSize = getOnePortion(macros);

    return (
       
        // //<!-- https://www.fda.gov/food/food-labeling-nutrition/changes-nutrition-facts-label -->
        <div className="p-1 border-2 border-black font-sans w-72">
            <div className="text-4xl font-extrabold leading-none">Nutrition Facts</div>
            <div className="flex justify-between font-bold border-b-8 border-black">
                <div>Serving size</div><div>{roundNumber(totalWeight)}g</div>
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
                    <div className="font-bold">{onePortionSize.totalDieteryFiber}%</div>
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