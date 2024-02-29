import { useState } from "react";

const UserDataForm = ({ setUser }) => {
    const [heightUnit, setHeightUnit] = useState('cm');
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        setUser(data);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto" autoComplete="on">
            {/* Name Section */}
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input type="text" id="name" name="name" autoComplete="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            {/* End of Name Section */}
            
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
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your age</label>
                <input type="number" id="age" name="age" autoComplete="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            {/* End of Age Section */}
           
            {/* Height Section */}
            <div className="mb-5">
                {/* Height Unit Selection */}
                <label htmlFor="height-unit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height Unit</label>
                <select id="height-unit" name="height-unit" value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
                    <option value="cm">cm</option>
                    <option value="meters">meters</option>
                    <option value="inches">inches (for feet/inches)</option>
                </select>
                
                {/* Conditional Height Input */}
                {heightUnit !== 'inches' ? (
                    <div>
                        <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your Height</label>
                        <input type="number" step="0.1" id="height" name="height" autoComplete="height" placeholder="Enter height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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
                    <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your weight</label>
                    <input type="number" step="0.1" id="weight" name="weight" autoComplete="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                {/* Weight Unit Selection */}
                <div className="w-1/4">
                    <label htmlFor="weight-unit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight Unit</label>
                    <select id="weight-unit" name="weight-unit" autoComplete="weight-unit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="kg">KG</option>
                        <option value="stones">Stones</option>
                        <option value="lbs">LBS</option>
                    </select>
                </div>
            </div>
            {/* End of Weight Section */}
            
            {/* Activity Level Section */}
            <div className="mb-5">
                <label htmlFor="activity-level" className="block mb-2 text-sm font-medium text-gray-900 dark:text:white">Choose your activity level</label>
                <select id="activity-level" name="activity-level" autoComplete="activity level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1.3">({"<"}1.4) Extremely inactive</option>
                    <option value="1.5">(1.4-1.6) Sedentary-Office Worker, little or no exercise</option>
                    <option value="1.8">(1.7-2) Construction worker or person running one hour daily</option>
                    <option value="2.2">(2.1-2.4) Agricultural worker (non mechanized) or person swimming two hours daily</option>
                    <option value="2.5">({">"}2.40) Ex.Competitive cyclist</option>
                </select>
            </div>
            {/* End of Activity Level Section */}
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate</button>
        </form>
    );
};

export default UserDataForm;
