import React, { useState, useRef } from "react";
import API from '../../utils/API';

// const searchInput = document.querySelector('input').value;

const RecipeSearch = () => {
    const [recipe, setRecipe] = useState('');
    const [searchQuery, setSearchQuery] = useState(null);
    
    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const getRecipe = () => {
        API.searchRecipe(searchQuery)
            .then(response => {
            console.log(response.data)
            setRecipe(response.data)
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
            <h1>Recipe Search</h1>
            <input type="text" placeholder="Search Recipe" onChange={handleChange} />
            <button onClick={getRecipe}>Get Data!</button>
        </div>
    )
}

export default RecipeSearch;
