import axios from 'axios';


export default {
        analyseRecipe: function() {
            console.log("AnalyseRecipe Fetch has been called")
            const requestBody = {
                "title": "Simple Tomato Pasta",
                "ingr": [
                    "400g bucatini 4 garlic cloves, sliced 1-2 tsp chilli flakes 125ml white wine 150ml double cream"
                ]
            }
            const API_key = "129c84ea6bbddd20b24d33834cfdb94d";
            const APP_id = "feb7fbdb"
            const url = `https://api.edamam.com/api/nutrition-details?app_id=${APP_id}&app_key=${API_key}`;

            return axios.post(url, requestBody);
        },
        searchRecipe: function(query) {
            console.log("SearchRecipe Fetch has been called")
            // Michal's key
            const apiKEY = '&app_key=a2f2545cd44d9f38bf1301d032e2905f';
            // Michal's app ID
            const apiID = '&app_id=d39ab340';
            const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&';
        
            return axios.get(baseURL + query + apiID + apiKEY)
    
        }
}