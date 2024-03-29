import { useState } from "react";
import PropTypes from 'prop-types';

const UserDataForm = ({ setUser, calculateCalories, calculateMacro }) => {
    const [heightUnit, setHeightUnit] = useState('cm');
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Convert height to cm to later 
        if(heightUnit === 'meters') {
            data.heightInCM = data.heightInCM * 100;
        } else if (heightUnit === 'inches' ) {
            const feetToCm = (data.heightFeet || 0) * 30.48;
            const inchesToCm = (data.heightInches || 0) * 2.54;
            data.heightInCM = Math.round(feetToCm + inchesToCm);
            delete data.heightFeet;
            delete data.heightInches;
        }


        // Convert weight to KG
        switch (data.weightUnit) {
            case 'stones':
                data.weightKG = Math.round(parseFloat(data.weightKG) * 6.35029);
                break;
            case 'lbs':
                data.weightKG = Math.round(parseFloat(data.weightKG) * 0.453592);
                break;
            // No conversion needed if the weight is already in kilograms
            case 'kg':
            default:
                data.weightKG = Math.round(parseFloat(data.weightKG));
                break;
        }
        delete data.weightUnit;

        setUser(data);
        //Return base calories amount from calculateCalories() that user needs to maintain weight
        let baseCal = calculateCalories(data);
        
        // Calculate calories based on goal : lose/maintain/gain 
        switch (data.goal) {
            case 'gain':
                // add 15% to base calories
                baseCal = Math.round(baseCal * 1.15);
                calculateMacro(baseCal, data);
                break;
            case 'lose':
                // subtract 15% from base calories
                baseCal = Math.round(baseCal * 0.85);
                calculateMacro(baseCal, data);
                break;
            default:
                calculateMacro(baseCal, data);
                
        }

    };





    return (
        <form onSubmit={handleSubmit} className="userDataForm max-w-sm mx-auto border p-5 mt-10 rounded" autoComplete="on">
            {/* Name Section */}
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input type="text" id="name" name="name" autoComplete="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            {/* End of Name Section */}

            {/* Name Section */}
            <div className="mb-5">
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your gender</label>
                <select id="gender" name="gender" autoComplete="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            {/* End of Gender Section */}
            
            {/* Goal Section */}
            <div className="mb-5">
                <label htmlFor="goal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your goal</label>
                <select id="goal" name="goal" autoComplete="goal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="lose">Lose Weight</option>
                    <option value="gain">Gain Weight</option>
                    <option value="maintain">Maintain Weight</option>
                </select>
            </div>
            {/* End of Goal Section */}
            
            {/* Age Section */}
            <div className="mb-5">
                <label htmlFor="userAge" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your age</label>
                <input type="number" id="userAge" name="age" autoComplete="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            {/* End of Age Section */}
           
            {/* Height Section */}
            <div className="mb-5">
                {/* Height Unit Selection */}
                <label htmlFor="userHeight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height Unit</label>
                <select id="userHeight" name="height-unit" value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
                    <option value="cm">cm</option>
                    <option value="meters">meters</option>
                    <option value="inches">inches (for feet/inches)</option>
                </select>
                
                {/* Conditional Height Input */}
                {heightUnit !== 'inches' ? (
                    <div>
                        <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your Height</label>
                        <input type="number" step="0.01" id="height" name="heightInCM" autoComplete="height" placeholder="Enter height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                ) : (
                    <div className="flex justify-between space-x-4">
                        <div className="flex-1">
                            <label htmlFor="height-feet" className="block text-sm font-medium text-gray-900 dark:text-white">Feet</label>
                            <input type="number" name="heightFeet" id="height-feet" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Feet" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="height-inches" className="block text-sm font-medium text-gray-900 dark:text-white">Inches</label>
                            <input type="number" name="heightInches" id="height-inches" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Inches" />
                        </div>
                    </div>
                )}
            </div>
            {/* End of Height Section */}

            {/* Weight Section */}
            <div className="mb-5 flex justify-between">
                {/* Weight Input */}
                <div className="w-3/4 pr-2">
                    <label htmlFor="weightKG" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your weight</label>
                    <input type="number" step="0.1" id="weightKG" name="weightKG" autoComplete="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                {/* Weight Unit Selection */}
                <div className="w-1/4">
                    <label htmlFor="weightUnit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight Unit</label>
                    <select id="weightUnit" name="weightUnit" autoComplete="weight-unit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="kg">KG</option>
                        <option value="stones">Stones</option>
                        <option value="lbs">LBS</option>
                    </select>
                </div>
            </div>
            {/* End of Weight Section */}
            
            {/* Activity Level Section */}
            <div className="mb-5">
                <label htmlFor="activityLevel" className="block mb-2 text-sm font-medium text-gray-900 dark:text:white">Choose your activity level</label>
                <select id="activityLevel" name="activityLevel" autoComplete="activity level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1.3">({"<"}1.4) Extremely inactive</option>
                    <option value="1.5">(1.4-1.6) Sedentary-Office Worker, little or no exercise</option>
                    <option value="1.8">(1.7-2) Construction worker or person running one hour daily</option>
                    <option value="2.2">(2.1-2.4) Agricultural worker (non mechanized) or person swimming two hours daily</option>
                    <option value="2.5">({">"}2.40) Ex.Competitive cyclist</option>
                </select>
            </div>
            {/* End of Activity Level Section  */}
            {/* Test comment  */}
            
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Calculate</button>
        </form>
    );
};


export default UserDataForm;


UserDataForm.propTypes = {
    setUser: PropTypes.func.isRequired,
    calculateCalories: PropTypes.func.isRequired,
    calculateMacro: PropTypes.func.isRequired,
}