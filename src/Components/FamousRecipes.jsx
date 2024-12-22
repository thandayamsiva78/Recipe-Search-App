import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FamousRecipes() {
    const [cards, setCards] = useState([]);
    const [recipeSelected , setRecipeSelected] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        const fetchingRecipeData = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
                const data = await response.json();
                setCards(data.meals);
                console.log(data);
            } catch (error) {
                console.error("Error Fetching Data!", error);
            }
        };

        fetchingRecipeData();
    }, []);

    const handleRecipeClicked = (index)=> {
        const selected = cards[index]
        console.log("Fomous Recipes :",selected);
        setRecipeSelected(selected)
        navigate("./RecipeDetails" , {state : {recipe : selected}});

    }

    return (
        <>
            <section className="fomous-recipe ">
                <h1 className="font-bold text-xl mt-4 pl-6">Famous Recipes here...</h1>
                <article>
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {cards.map((item, index) => (
                            <div key={index}  className="text-center p-2 shadow-md m-1 rounded-xl hover:scale-95 transition-all">
                                <img onClick={()=> handleRecipeClicked(index)} className="object-cover rounded-lg cursor-pointer" src={item.strMealThumb} alt={item.strMeal} />
                                <div className="flex justify-between p-1">
                                    <h1 className="text-gray-700">{item.strMeal}</h1>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

        </>
    );
}

export default FamousRecipes;




            
