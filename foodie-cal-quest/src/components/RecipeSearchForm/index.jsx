import React, { useState } from "react";
import Select from 'react-select';

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
  

const RecipeSearchForm = ({ onSubmit, handleSearchRecipe }) => {
    const [recipeName, setRecipeName] = useState('');
    const [selectedDietOptions, setSelectedDietOptions] = useState([]);
    const [selectedHealthOptions, setSelectedHealthOptions] = useState([]);
    const [selectedCuisineType, setSelectedCuisineType] = useState(null);
    const [selectedDishType, setSelectedDishType] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // In formData when user does not choose any option it returns undefined
        const formData = {
        q: recipeName,
        diet: selectedDietOptions.map(option => option.value),
        health: selectedHealthOptions.map(option => option.value),
        cuisineType: selectedCuisineType?.value,
        dishType: selectedDishType?.value,
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

            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Search Recipe</button>
        </form>
  );
};

export default RecipeSearchForm;
