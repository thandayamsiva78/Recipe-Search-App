import { useEffect, useState } from "react";



function FavoritesComponents() {

    const [getData, setGetData] = useState([])
    const retrivingLocalStorageData = () => {
        const response = localStorage.getItem("Favorites Lists")
        if (response) {
            const data = JSON.parse(response)
            setGetData(data)
            console.log(data);
        } else {
            console.log("Not Found!");
        }

    }
    useEffect(() => {
        retrivingLocalStorageData()
    }, [])
    return (
        <>
            <section className="bg-white shadow-md m-4 rounded-lg">
                <h1 className="text-style text-orange-600 text-3xl font-bold p-4">Your Favorites....</h1>

                <div className="p-4">
                    <table className="w-full">
                        <thead>
                            <tr className="">
                                {/* <th>Sl.No</th>
                                <th>Recipe Image</th>
                                <th>Recipe Name</th> */}
                            </tr>
                        </thead>
                        <tbody >
                            {getData.map((item, index) => (

                                <tr key={index} className="shadow-mg bg-white" >
                                    <td className="font-bold text-gray-700">{index + 1}</td>
                                    <td><img className="w-[150px] shadow-md rounded-xl mb-2 p-1" src={item.thumbnail} alt={item.name} /></td>
                                    <td className="font-bold text-gray-700">{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <div className="flex justify-between items-center">
                        <h1>Sl.No</h1>
                        <h1>Recipe Image</h1>
                        <h1>Recipe Name</h1>
                    </div>
                    {getData.map((item, index) => (

                        <div key={index} className="flex justify-between items-center" >
                            <h1 className="font-bold text-gray-700">{index + 1}</h1>
                            <img className="w-[150px] h-[150px] shadow-md rounded-xl mb-2 p-1" src={item.thumbnail} alt={item.name} />
                            <h1 className="font-bold text-gray-700">{item.name}</h1>
                        </div>
                    ))} */}
                </div>
            </section>
        </>
    )
}

export default FavoritesComponents;