

const RecipeCard = ( { data } ) => {

    console.log("recipe Card data: ", data.recipe)



    return (
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white w-full">
            <div className="text-center p-4 bg-gray-100 text-xs">
                <p className="font-bold truncate">{data.recipe.label}</p>
            </div>
            <img className="w-full h-32 object-cover" src={data.recipe.image}></img>
        </div>
    )
}

export default RecipeCard;