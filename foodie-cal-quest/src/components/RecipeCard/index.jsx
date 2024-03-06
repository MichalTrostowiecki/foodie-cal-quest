import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ( { data, mealType } ) => {

    // Encode the label to handle spaces and special characters in the URL
    const recipePath = `/recipe-search/${mealType}/${encodeURIComponent(data.recipe.label)}`;

 
    return (
        <div className="relative border rounded-lg overflow-hidden shadow-lg bg-white w-full group hover:cursor-pointer">
            {/* Existing content */}
            <div className="text-center p-4 bg-gray-100 text-xs">
                <p className="font-bold truncate">{data.recipe.label}</p>
            </div>
            <img className="w-full h-32 object-cover" src={data.recipe.image} alt={data.recipe.label} />

            {/* Overlay with Button */}
            <div className="absolute inset-0 bg-black bg-opacity-0 flex justify-center items-center opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={{
                    pathname:recipePath,
                    state: { mealType: mealType}
                    }}>
                    <button className="text-white font-bold py-2 px-4 rounded">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default RecipeCard;


RecipeCard.propTypes = {
    data: PropTypes.shape({
        recipe: PropTypes.shape({
            label: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired,
    mealType: PropTypes.string.isRequired
}