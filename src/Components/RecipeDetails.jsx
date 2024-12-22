import { useLocation } from "react-router-dom";

function RecipeDetails () {
    const location = useLocation();
    const {recipe} = location.state || {};
    console.log(recipe);
    return (
        <>
           {recipe ? 
            <section className="bg-white shadow-md rounded-xl m-4">
            <h1 className="text-style text-red-600 text-3xl font-bold p-2 pl-4">{recipe.strMeal}</h1>
            <div className="recipeDetails flex gap-4 p-4">
                <img className="w-full h-[400px] rounded-lg " src={recipe.strMealThumb} alt={recipe.strMeal} />
                <hr />
                <div>
                    <h2 className="font-bold text-gray-700 text-lg">Instructions:</h2>
                    <p>{recipe.strInstructions}</p>
                    <h2 className="font-bold text-gray-700 text-lg">Ingredients</h2>
                    <p>{recipe.strIngredient1}</p>
                    <p>{recipe.strIngredient2}</p>
                    <p>{recipe.strIngredient3}</p>
                    <p>{recipe.strIngredient4}</p>
                    <p>{recipe.strIngredient5}</p>
                </div>
            </div>
        </section>
        
        : ""}
        </>
    )
}

export default RecipeDetails;