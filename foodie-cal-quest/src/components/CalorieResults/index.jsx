import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CalorieResults = ({ userCalories }) => {
    // Calculate total grams of fat, protein, and carbs
    const totalGrams = (userCalories?.protein?.grams || 0) + (userCalories?.carbs?.grams || 0) + (userCalories?.fats?.grams || 0);

    // Calculate percentage of fat, protein, and carbs
    const fatPercentage = totalGrams === 0 ? 0 : ((userCalories?.fats?.grams || 0) / totalGrams) * 100;
    const proteinPercentage = totalGrams === 0 ? 0 : ((userCalories?.protein?.grams || 0) / totalGrams) * 100;
    const carbsPercentage = totalGrams === 0 ? 0 : ((userCalories?.carbs?.grams || 0) / totalGrams) * 100;

    return (
        <>
            <div className="max-w-2xl m-auto p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 content-center">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Macronutrients:</h5>
                </a>
                <div className="flex flex-row">
                    <div>
                        <p>Calories: </p>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbar
                                value={userCalories?.baseCalories || 0}
                                text={`${userCalories?.baseCalories || 0}kcal`}
                                styles={buildStyles({
                                    pathTransitionDuration: 10,
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <p>Protein: </p>
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={proteinPercentage} text={`${userCalories?.protein?.grams || 0}g`} />
                        </div>
                    </div>
                    <div>
                        <p>Carbs: </p>
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={carbsPercentage} text={`${userCalories?.carbs?.grams || 0}g`} />
                        </div>
                    </div>
                    <div>
                        <p>Fats: </p>
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={fatPercentage} text={`${userCalories?.fats?.grams || 0}g`} />
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
};

export default CalorieResults;
