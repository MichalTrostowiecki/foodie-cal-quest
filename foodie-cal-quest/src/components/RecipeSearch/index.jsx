import React, { useState, useRef } from "react";
import API from '../../utils/API/SearchRecipeAPI';

// const searchInput = document.querySelector('input').value;

const RecipeSearch = () => {
    const [recipe, setRecipe] = useState('');
    
    const inputRef = useRef(null);

    const getRecipe = () => {
        API.searchRecipe(inputRef.current.value)
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
            <input type="text" placeholder="Search Recipe" ref={inputRef} />
            <button onClick={getRecipe}>Get Data!</button>
        </div>
    )
}

export default RecipeSearch;
