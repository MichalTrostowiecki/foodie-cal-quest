import axios from 'axios';


export default {
        search: function() {
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
        }
    }

