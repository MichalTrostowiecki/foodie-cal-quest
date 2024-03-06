import React, { useState } from "react";
import Select from 'react-select';
import PropTypes from 'prop-types';

// Options for the select fields
const dietOptions = [
  { value: 'balanced', label: 'Balanced' },
  { value: 'high-fiber', label: 'High-fiber' },
  { value: 'high-protein', label: 'High-protein' },
  { value: 'low-carb', label: 'Low-carb' },
  { value: 'low-fat', label: 'Low-fat' },
  { value: 'low-sodium', label: 'Low-sodium' },
];

const healthOptions = [
  { value: 'celery-free', label: 'Celery-free' },
  { value: 'dairy-free', label: 'Dairy-free' },
  { value: 'egg-free', label: 'Egg-free' },
  { value: 'fish-free', label: 'Fish-free' },
  { value: 'gluten-free', label: 'Gluten-free' },
  { value: 'immuno-supportive', label: 'Immuno-supportive' },
  // Add more options as needed
];

const cuisineTypeOptions = [
    { value: 'American', label: 'American' },
    { value: 'Asian', label: 'Asian' },
    { value: 'British', label: 'British' },
    { value: 'Caribbean', label: 'Caribbean' },
    { value: 'Central Europe', label: 'Central Europe' },
    { value: 'Chinese', label: 'Chinese' },
    { value: 'Eastern Europe', label: 'Eastern Europe' },
    { value: 'French', label: 'French' },
    { value: 'Indian', label: 'Indian' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Kosher', label: 'Kosher' },
    { value: 'Mediterranean', label: 'Mediterranean' },
    { value: 'Mexican', label: 'Mexican' },
    { value: 'Middle Eastern', label: 'Middle Eastern' },
    { value: 'Nordic', label: 'Nordic' },
    { value: 'South American', label: 'South American' },
    { value: 'South East Asian', label: 'South East Asian' }
  ];
  

  const dishTypeOptions = [
    { value: 'Biscuits and cookies', label: 'Biscuits and cookies' },
    { value: 'Bread', label: 'Bread' },
    { value: 'Cereals', label: 'Cereals' },
    { value: 'Condiments and sauces', label: 'Condiments and sauces' },
    { value: 'Desserts', label: 'Desserts' },
    { value: 'Drinks', label: 'Drinks' },
    { value: 'Main course', label: 'Main course' },
    { value: 'Pancake', label: 'Pancake' },
    { value: 'Preps', label: 'Preps' },
    { value: 'Preserve', label: 'Preserve' },
    { value: 'Salad', label: 'Salad' },
    { value: 'Sandwiches', label: 'Sandwiches' },
    { value: 'Side dish', label: 'Side dish' },
    { value: 'Soup', label: 'Soup' },
    { value: 'Starter', label: 'Starter' },
    { value: 'Sweets', label: 'Sweets' }
  ];
  

const RecipeSearchForm = ({ onSubmit, handleSearchRecipe, handleGetMeal }) => {
    const [recipeName, setRecipeName] = useState('');
    const [selectedDietOptions, setSelectedDietOptions] = useState([]);
    const [selectedHealthOptions, setSelectedHealthOptions] = useState([]);
    const [selectedCuisineType, setSelectedCuisineType] = useState(null);
    const [selectedDishType, setSelectedDishType] = useState(null);
    const [caloriesPreference, setCaloriesPreference] = useState('');
    const [caloriesRange, setCaloriesRange] = useState({ min: '', max: '' });
  


    const handleFormSubmit = (event) => {
        event.preventDefault();

        let caloriesValue;
        if (caloriesPreference === 'Minimum') {
            caloriesValue = `${caloriesRange.min}+`; // Append '+' if minimum is selected
        } else if (caloriesPreference === 'Min - Max') {
            caloriesValue = `${caloriesRange.min}-${caloriesRange.max}`; // Format as a range for Min - Max
        } else if (caloriesPreference === 'Maximum') {
            caloriesValue = `${caloriesRange.max}`; // Assuming maximum implies a range from 0 to the specified max
        }

        // In formData when user does not choose any option it returns undefined
        const formData = {
        q: recipeName,
        diet: selectedDietOptions.map(option => option.value),
        health: selectedHealthOptions.map(option => option.value),
        cuisineType: selectedCuisineType?.value,
        dishType: selectedDishType?.value,
        calories:caloriesValue,
        };

        // Filter out keys with falsy (undefined) values
        const filteredFormData = Object.entries(formData).reduce((accumulator, [key, value]) => {
            // If value is truthy or  not an empty array include it in the filtered data
            if (value || (Array.isArray(value) && value.length > 0)) {
                accumulator[key] = value;
            }
            return accumulator;
        }, {});
        
        onSubmit(filteredFormData);
        handleSearchRecipe();
        handleGetMeal(true);
  };

    return (
        <form className="max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow" onSubmit={handleFormSubmit}>
            <h2 className="text-lg font-semibold mb-4">Recipe Search Options</h2>

            <div className="mb-4">
                <label htmlFor="recipeName" className="block mb-2 font-medium">Main Recipe</label>
                <input
                type="text"
                id="recipeName"
                className="w-full p-2 border rounded-md"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 font-medium">Diet</label>
                <Select
                isMulti
                options={dietOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={setSelectedDietOptions}
                />
            </div>

              {/* Calories Preference Selection */}
            <div className="mb-5">
                <label htmlFor="caloriesPreference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calories Preference</label>
                <select id="caloriesPreference" name="caloriesPreference" value={caloriesPreference} onChange={(e) => setCaloriesPreference(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
                    <option value="">Select Calories Preference</option>
                    <option value="Minimum">Minimum</option>
                    <option value="Min - Max">Min - Max</option>
                    <option value="Maximum">Maximum</option>
                </select>
            </div>

            {/* Conditional Calories Input Fields */}
            {caloriesPreference && (
            <div className="flex justify-evenly">
                {caloriesPreference !== 'Maximum' && (
                    <div className="mb-4">
                        <label htmlFor="minCalories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Calories</label>
                        <input
                        type="number"
                        id="minCalories"
                        name="minCalories"
                        value={caloriesRange.min}
                        onChange={(e) => setCaloriesRange({ ...caloriesRange, min: e.target.value })}
                        placeholder="Enter min calories"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        />
                    </div>
                )}
                {caloriesPreference === 'Min - Max' && (
                    <div className="mb-4">
                        <label htmlFor="maxCalories" className="block mb-2 text-sm font-medium text-gray-900 dark:text:white">Maximum Calories</label>
                        <input
                        type="number"
                        id="maxCalories"
                        name="maxCalories"
                        value={caloriesRange.max}
                        onChange={(e) => setCaloriesRange({ ...caloriesRange, max: e.target.value })}
                        placeholder="Enter max calories"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        />
                    </div>
                )}
                {caloriesPreference === 'Maximum' && (
                    <div className="mb-4">
                        <label htmlFor="maxCalories" className="block mb-2 text-sm font-medium text-gray-900 dark:text:white">Maximum Calories</label>
                        <input
                        type="number"
                        id="maxCalories"
                        name="maxCalories"
                        value={caloriesRange.max}
                        onChange={(e) => setCaloriesRange({ min: '', max: e.target.value })}
                        placeholder="Enter max calories"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text:white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        />
                    </div>
                )}
            </div>
            )}

            <div className="mb-4">
                <label className="block mb-2 font-medium">Health</label>
                <Select
                isMulti
                options={healthOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={setSelectedHealthOptions}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 font-medium">Cuisine Type</label>
                <Select
                options={cuisineTypeOptions}
                className="basic-single"
                classNamePrefix="select"
                onChange={setSelectedCuisineType}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 font-medium">Dish Type</label>
                <Select
                options={dishTypeOptions}
                className="basic-single"
                classNamePrefix="select"
                onChange={setSelectedDishType}
                />
            </div>

            <button type="submit" className="bg-transparent hover:bg-green-500 text-sm text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Search Recipe</button>
        </form>
  );
};

export default RecipeSearchForm;


RecipeSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSearchRecipe: PropTypes.func.isRequired,
    handleGetMeal: PropTypes.func.isRequired,
};