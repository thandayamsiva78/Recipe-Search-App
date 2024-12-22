import { useEffect, useState } from "react"
import FamousRecipes from "./FamousRecipes";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";



function Layout() {
    const [search, setSearch] = useState([]);
    const [input, setInput] = useState("");
    // const [recipeSelectd , setRecipeSelected] = useState("");


    const [count, setCount] = useState(0)
    

    const navigate = useNavigate();


    useEffect(() => {
        const handleQuerySeach = async () => {
            if (input.trim().toLowerCase()) {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
                const data = await response.json()
                setSearch("Searched Recipe Lists :",data.meals)
                // console.log("meal Detail :", data.meals);
            }
        }
        handleQuerySeach()
    }, [input])

    const handleRecipeClicked = (index) => {
        const selected = search[index]
        console.log(selected);
        // setRecipeSelected(selected)
        navigate("./RecipeDetails", { state: { recipe: selected } });

    }

    const handleFavoritesClick = (index) => {
            const favorite = search[index]
            console.log(favorite);
            // console.log("check" , favorite.strMeal);
            const existingfavorites = JSON.parse(localStorage.getItem("Favorites Lists")) || [];
            const updateFavorites = [...existingfavorites , {"name" : favorite.strMeal , "thumbnail" : favorite.strMealThumb}]
            localStorage.setItem("Favorites Lists" , JSON.stringify(updateFavorites))
            setCount((count)=> count + 1)

    }

    const handleFavoriteBtnClick = () => {
        navigate("./FavoritesComponent")
    }


    return (
        <>
            <section id="layout">
                <header className="header text-white">
                    <div className="flex justify-between items-center py-4 px-6">
                        <h1 className="text-style font-bold text-xl">Recipe App</h1>
                        <nav className="flex gap-6 items-center">
                            <ul className="flex gap-3">
                                {/* <li><a href="">Home</a></li>
                                <li><a href="">Menu</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">Shop</a></li> */}
                            </ul>
                            <div className="font-bold mr-4">
                                <a className="hover:underline pr-1" onClick={()=> handleFavoriteBtnClick()} href="">Favorites</a>
                                <span className="bg-red-600 rounded-full px-1.5 text-white absolute">{count}</span>
                            </div>
                            <div className="flex gap-3 font-semibold">
                                <button className="btns py-2 px-4 hover:bg-white hover:text-black font-medium rounded-3xl hover:font-bold text-white">Sign In</button>
                                <button className="btns py-2 px-4 hover:bg-white hover:text-black font-medium rounded-3xl hover:font-bold text-white">Login</button>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="searchContainer flex justify-center items-center">
                    <div className="search-container flex justify-between items-center pr-2 border-gray-400 border-2 rounded-3xl">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="search-input focus:outline-none rounded-3xl border-r-0 py-2 px-4 w-full text-white
                        "
                        type="text"
                        placeholder="Search Recipe..." />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </div>
                    </div>
                </div>

                {input === "" ?
                    <FamousRecipes /> :
                    <article className="result-recipes">
                        <h1 className="font-bold pl-6 text-lg mt-10">Searched Recipes...</h1>
                        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {search && search.length > 0 ? (
                                search.map((item, index) => (
                                    <div key={index} className="text-center p-2 shadow-md m-1 rounded-xl hover:scale-95 transition-all">
                                        <img onClick={() => handleRecipeClicked(index)} className="object-cover rounded-lg cursor-pointer" src={item.strMealThumb} alt={item.strMeal} />
                                        <div className="flex justify-between p-1">
                                            <h1 className="text-gray-700">{item.strMeal}</h1>
                                            <button  className="">
                                                <svg onClick={() => handleFavoritesClick(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="size-6 hover:fill-red-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No Recipes Found....</p>
                            )}
                        </div>

                    </article>
                }

                <Footer/>

            </section>

        </>
    )
}

export default Layout;