
import { useMemo } from 'react';

// Custom hook to calculate nutritional values per portion
const useNutritionPortion = (nutritionInfo) => {
    return useMemo(() => {
        const portionSize = nutritionInfo.yield || 1; // Default to 1 if yield is not provided

        // Function to round numbers and handle undefined values
        const roundNumber = (num) => num ? Math.round(num) : 0;

        // Function to calculate value per portion
        const calcPerPortion = (value) => roundNumber(value / portionSize);

        // Constructing new object with per portion values
        let adjustedMacros = {
            calories: calcPerPortion(nutritionInfo.calories),
            totalFat: calcPerPortion(nutritionInfo.totalNutrients.FAT.quantity),
            totalDailyFat: calcPerPortion(nutritionInfo.totalDaily.FAT.quantity),
            saturatedFat: calcPerPortion(nutritionInfo.totalNutrients.FASAT.quantity),
            saturatedFatDaily: calcPerPortion(nutritionInfo.totalDaily.FASAT.quantity),
            cholesterol: calcPerPortion(nutritionInfo.totalNutrients.CHOLE.quantity),
            totalDailyCholesterol: calcPerPortion(nutritionInfo.totalDaily.CHOLE.quantity),
            sodium: calcPerPortion(nutritionInfo.totalNutrients.NA.quantity),
            totalDailySodium: calcPerPortion(nutritionInfo.totalDaily.NA.quantity),
            totalCarbohydrate: calcPerPortion(nutritionInfo.totalNutrients.CHOCDF.quantity),
            totalDailyCarbohydrate: calcPerPortion(nutritionInfo.totalDaily.CHOCDF.quantity),
            dietaryFiber: calcPerPortion(nutritionInfo.totalNutrients.FIBTG.quantity),
            totalDietaryFiber: calcPerPortion(nutritionInfo.totalDaily.FIBTG.quantity),
            totalSugar: calcPerPortion(nutritionInfo.totalNutrients.SUGAR.quantity),
            totalProtein: calcPerPortion(nutritionInfo.totalNutrients.PROCNT.quantity),
            vitaminD: calcPerPortion(nutritionInfo.totalNutrients.VITD.quantity),
            totalVitaminD: calcPerPortion(nutritionInfo.totalDaily.VITD.quantity),
            calcium: calcPerPortion(nutritionInfo.totalNutrients.CA.quantity),
            totalCalcium: calcPerPortion(nutritionInfo.totalDaily.CA.quantity),
            iron: calcPerPortion(nutritionInfo.totalNutrients.FE.quantity),
            totalIron: calcPerPortion(nutritionInfo.totalDaily.FE.quantity),
            potassium: calcPerPortion(nutritionInfo.totalNutrients.K.quantity),
            totalDailyPotassium: calcPerPortion(nutritionInfo.totalDaily.K.quantity),
            servingSize: calcPerPortion(nutritionInfo.totalWeight),
        };

        return adjustedMacros;
    }, [nutritionInfo]);
};

export default useNutritionPortion;