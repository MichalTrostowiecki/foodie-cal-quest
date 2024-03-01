import axios from "axios";

export default {
    searchRecipe: function(query) {
        const apiKEY = '&app_key=fef208030de9df227d7d4bc20ca69c98';
        const apiID = '&app_id=ea0fafeb';
        const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=';
        
        return axios.get(baseURL + query + apiID + apiKEY)

    }
}