import axios from 'axios';


export default {
        analyseRecipe: function(recipe) {
            
            let formattedRecipe = [];

            // Check if recipe is a string and try to split it into an array
            if (typeof recipe === 'string') {
                // Assuming ingredients are separated by newlines or another consistent delimiter
                formattedRecipe = recipe.split("\n");
            } else if (Array.isArray(recipe)) {
                // If it's already an array, use it directly
                formattedRecipe = recipe;
            }
        
            const requestBody = {
                "title": "Simple Tomato Pasta",
                "ingr": formattedRecipe
            };
            
            const API_key = "129c84ea6bbddd20b24d33834cfdb94d";
            const APP_id = "feb7fbdb"
            const url = `https://api.edamam.com/api/nutrition-details?app_id=${APP_id}&app_key=${API_key}`;

            return axios.post(url, requestBody);
        },
        searchRecipe: function(query) {
            console.log("SearchRecipe Fetch has been called")
            console.log("query",query)
            // Michal's key
            const apiKEY = '&app_key=0f50b6574cfb50c8691da1f9049834ff';
            // Michal's app ID
            const apiID = '&app_id=d74e6a59';
            const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&';

            return axios.get(baseURL + query + apiID + apiKEY)
    
        }
}