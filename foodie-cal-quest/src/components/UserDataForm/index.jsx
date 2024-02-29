const UserDataForm = () => {
    return (
        <form className="max-w-sm mx-auto" autoComplete="on">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input type="text" id="name" name="name" autoComplete="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="goal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your goal</label>
                <select id="goal" name="goal" autoComplete="goal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="lose">Lose Weight</option>
                    <option value="gain">Gain Weight</option>
                    <option value="maintain">Maintain Weight</option>
                </select>
            </div>
            <div className="mb-5">
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your age</label>
                <input type="text" id="age" name="age" autoComplete="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5 flex justify-between">
                <div className="w-3/4">
                    <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your weight</label>
                    <input type="text" id="weight" name="weight" autoComplete="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="w-1/4 ml-2">
                    <label htmlFor="weight-unit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight Unit</label>
                    <select id="weight-unit" name="weight-unit" autoComplete="weight-unit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="kg">KG</option>
                        <option value="stones">Stones</option>
                    </select>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="activity-level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your activity level</label>
                <select id="activity-level" name="activity-level" autoComplete="activity level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="extremely-inactive">Extremely inactive (1.4)</option>
                    <option value="sedentary">Sedentary-Office Worker, little or no exercise (1.4-1.6)</option>
                    <option value="moderately-active">Construction worker or person running one hour daily (1.7-2)</option>
                
                </select>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    );
};

export default UserDataForm;

