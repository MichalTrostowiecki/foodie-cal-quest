import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CalorieResults = ({ userCalories, user }) => {
    if (!userCalories) return null;
    
    // Optional chaining and nullish coalescing to safely access properties
    const fatCalories = userCalories.fats?.calories ?? 0;
    const baseCalories = userCalories.baseCalories ?? 0;
    const proteinGrams = userCalories.protein?.grams ?? 0;
    const carbsGrams = userCalories.carbs?.grams ?? 0;
    const fatsGrams = userCalories.fats?.grams ?? 0;

    const fatPercentage = (fatCalories / baseCalories) * 100;
    const proteinPercentage = ((userCalories.protein?.calories ?? 0) / baseCalories) * 100;
    const carbsPercentage = ((userCalories.carbs?.calories ?? 0) / baseCalories) * 100;

    return (
        <div className="max-w-xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 mt-5">
            <div className="text-center mb-4">
                <h1 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{!user.name ? null : `Welcome ${user.name}` }</h1>
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Your Macros</h5>
                <p className='text-green-500 font-bold'>{!user.goal ? null : `To ${user.goal} weight :`} </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center">
                    <p>Calories</p>
                    <div className="w-24 h-24 sm:w-32 sm:h-32">
                        <CircularProgressbar
                            value={baseCalories}
                            text={`${baseCalories}kcal`}
                            styles={buildStyles({
                                pathTransitionDuration: 2,
                                textColor: '#4a5568',
                                pathColor: '#48bb78',
                                trailColor: '#cbd5e0',
                            })}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p>Protein</p>
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                        <CircularProgressbar value={proteinPercentage} text={`${proteinGrams}g`} />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p>Carbs</p>
                    <div className="w-20 h-20 sm:w-24 sm:h-24"> 
                        <CircularProgressbar value={carbsPercentage} text={`${carbsGrams}g`} />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p>Fats</p>
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                        <CircularProgressbar value={fatPercentage} text={`${fatsGrams}g`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

CalorieResults.propTypes = {
    user: PropTypes.shape({
        goal: PropTypes.string,
    }),
    userCalories: PropTypes.shape({
        baseCalories: PropTypes.number,
        protein: PropTypes.shape({
            grams: PropTypes.number,
            calories: PropTypes.number,
        }),
        carbs: PropTypes.shape({
            grams: PropTypes.number,
            calories: PropTypes.number,
        }),
        fats: PropTypes.shape({
            grams: PropTypes.number,
            calories: PropTypes.number,
        }),
    }).isRequired,
};

export default CalorieResults;
