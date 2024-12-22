import { useLocation } from "react-router-dom";

function RecipeDetails() {
    const location = useLocation();
    const { recipe } = location.state || {};
    console.log("Recipe Details : ",recipe);
    return (
        <>
            <section>
                {recipe ?
                    <section className="recipe-details bg:white text-black  shadow-md rounded-xl pt-6">
                        <h1 className="text-style text-red-500 text-3xl font-bold p-2 pl-4">{recipe.strMeal}</h1>
                        <div className="recipeDetails flex gap-4 p-4 ">
                            <img className="w-full h-[400px] rounded-lg " src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <hr />
                            <div>
                                <h2 className="font-bold text-lg">Instructions:</h2>
                                <p>{recipe.strInstructions}</p>
                                <h2 className="font-bold text-lg">Ingredients</h2>
                                <p>{recipe.strIngredient1}</p>
                                <p>{recipe.strIngredient2}</p>
                                <p>{recipe.strIngredient3}</p>
                                <p>{recipe.strIngredient4}</p>
                                <p>{recipe.strIngredient5}</p>
                            </div>
                        </div>
                        <button className="rounded-md font-bold p-6 flex justify-center items-center gap-4">
                        <h1 className="flex gap-3">Watch On </h1>
                            <div className="bg-red-600 hover:bg-red-500 text-white p-4 rounded-md flex gap-3">
                            <a href={recipe.strYoutube} target="_blank">You Tube</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
                            </div>
                            

                        </button>
                    </section>

                    : ""}
                    
            </section>
        </>
    )
}

export default RecipeDetails;