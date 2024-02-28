import axios from 'axios';


export default {
        search: function() {
            const requestBody = {
                "title": "Simple Tomato Pasta",
                "ingr": [
                    "200g pasta",
                    "2 tomatoes",
                    "1 tbsp olive oil",
                    "Salt to taste"
                ]
            }
            const API_key = "129c84ea6bbddd20b24d33834cfdb94d";
            const APP_id = "feb7fbdb"
            const url = `https://api.edamam.com/api/nutrition-details?app_id=${APP_id}&app_key=${API_key}`;

            return axios.post(url, requestBody);
        }
    }

