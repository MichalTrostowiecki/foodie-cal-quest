import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CalorieResultsRecipes = ({ nutritionInfo }) => {
    // Calculate total grams of fat, protein, and carbs
    const totalGrams = (nutritionInfo.totalNutrients.PROCNT.quantity || 0) + (nutritionInfo.totalNutrients.CHOCDF.quantity || 0) + (nutritionInfo.totalNutrients.FAT.quantity || 0);

    // Calculate percentage of fat, protein, and carbs
    const fatPercentage = totalGrams === 0 ? 0 : (nutritionInfo.totalNutrients.FAT.quantity / totalGrams) * 100;
    const proteinPercentage = totalGrams === 0 ? 0 : (nutritionInfo.totalNutrients.PROCNT.quantity / totalGrams) * 100;
    const carbsPercentage = totalGrams === 0 ? 0 : (nutritionInfo.totalNutrients.CHOCDF.quantity / totalGrams) * 100;

    return (
        <>
            <div className="max-w-2xl m-auto p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 content-center">
                <div className="flex flex-row space-x-7">
                    <div>
                        <p>Calories: </p>
                        <div style={{ width: 80, height: 80 }}>
                            <CircularProgressbar
                                value={nutritionInfo.calories || 0}
                                text={`${Math.round(nutritionInfo.calories)}kcal`}
                                styles={buildStyles({
                                    pathTransitionDuration: 10,
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <p>Protein: </p>
                        <div style={{ width: 70, height: 70 }}>
                            <CircularProgressbar value={proteinPercentage} text={`${Math.round(nutritionInfo.totalNutrients.PROCNT.quantity || 0)}g`} />
                        </div>
                    </div>
                    <div>
                        <p>Carbs: </p>
                        <div style={{ width: 70, height: 70 }}>
                            <CircularProgressbar value={carbsPercentage} text={`${Math.round(nutritionInfo.totalNutrients.CHOCDF.quantity || 0)}g`} />
                        </div>
                    </div>
                    <div>
                        <p>Fats: </p>
                        <div style={{ width: 70, height: 70 }}>
                            <CircularProgressbar value={fatPercentage} text={`${Math.round(nutritionInfo.totalNutrients.FAT.quantity || 0)}g`} />
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
};

export default CalorieResultsRecipes;

