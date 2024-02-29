import { useEffect } from "react";
import PropTypes from 'prop-types'


const NutritionalLabel = ( { data } ) => {

    useEffect(() => {
        console.log(data)
    })

    // Destructure data for better code readibility
    const {
        calories,
        cuisineType,
        totalWeight,
        totalDaily,
        dietLabels,
        dishType,
        healthLabels,
        ingredients,
        mealType,
        totalNutrients,
        totalNutrientsKCal,

    } = data

    const roundNumber = (num) => {
        return Math.round(num)
    }


    return (
        //<!-- https://www.fda.gov/food/food-labeling-nutrition/changes-nutrition-facts-label -->
        <div className="p-1 border-2 border-black font-sans w-72">
        <div className="text-4xl font-extrabold leading-none">Nutrition Facts</div>
        <div className="flex justify-between font-bold border-b-8 border-black">
            <div>Serving size</div><div>{totalWeight}g</div>
        </div>
        <div className="flex justify-between items-end font-extrabold">
            <div>
                <div className="font-bold">Amount per serving</div>
                <div className="text-4xl">Calories</div>
            </div>
            <div className="text-5xl">{calories}</div>
        </div>
        <div className="border-t-4 border-black text-sm pb-1">
            <div className="text-right font-bold pt-1 pb-1">% Daily value*</div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>
                    <span className="font-bold">Total Fat</span> 8g
                </div>
                <div className="font-bold">{roundNumber(totalDaily.FAT.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>Saturated Fat {roundNumber(totalNutrients.FASAT.quantity)}g</div>
                <div className="font-bold">{roundNumber(totalDaily.FASAT.quantity)}%</div>
            </div>
            
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>
                    <span className="font-bold">Cholesterol</span> 0mg
                </div>
                <div className="font-bold">{roundNumber(totalDaily.CHOLE.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>
                    <span className="font-bold">Sodium</span> 160mg
                </div>
                <div className="font-bold">{roundNumber(totalDaily.NA.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>
                    <span className="font-bold">Total Carbohydrate</span> 37g
                </div>
                <div className="font-bold">{roundNumber(totalDaily.CHOCDF.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div className="pl-4">
                    Dietary Fiber 4g
                </div>
                <div className="font-bold">{roundNumber(totalDaily.FIBTG.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="pl-4">
                Total Sugar {roundNumber(totalNutrients.SUGAR.quantity)}g
            </div>
            <hr className="border-gray-500"/>
            <div>
                <span className="font-bold">Protein</span> {roundNumber(totalNutrients.PROCNT.quantity)}g
            </div>
        </div>
        <div className="border-t-8 border-black pt-1 text-sm">
            <div className="flex justify-between">
                <div>Vitamin D {roundNumber(totalNutrients.VITD.quantity)}µg</div>
                <div>{roundNumber(totalDaily.VITD.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>Calcium {roundNumber(totalNutrients.CA.quantity)}mg</div>
                <div>{roundNumber(totalDaily.CA.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>Iron {roundNumber(totalNutrients.FE.quantity)}mg</div>
                <div>{roundNumber(totalDaily.FE.quantity)}%</div>
            </div>
            <hr className="border-gray-500"/>
            <div className="flex justify-between">
                <div>Potassium {roundNumber(totalNutrients.K.quantity)}mg</div>
                <div>{roundNumber(totalDaily.K.quantity)}%</div>
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
    data: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      cuisineType: PropTypes.arrayOf(PropTypes.string),
      totalWeight: PropTypes.number.isRequired,
      totalDaily: PropTypes.object.isRequired,
      dietLabels: PropTypes.arrayOf(PropTypes.string),
      dishType: PropTypes.arrayOf(PropTypes.string),
      healthLabels: PropTypes.arrayOf(PropTypes.string),
      ingredients: PropTypes.array.isRequired,
      mealType: PropTypes.arrayOf(PropTypes.string),
      totalNutrients: PropTypes.object.isRequired,
      totalNutrientsKCal: PropTypes.object.isRequired,
    }).isRequired,
  };

export default NutritionalLabel;