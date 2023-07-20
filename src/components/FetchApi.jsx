import React, { useEffect, useState } from 'react'
import { fw } from '../utils/fw';


export const FetchApi = () => {
    const SEARCH_BY_FIRST_LETTER = "/search.php?f=a"
    console.log(import.meta.env.VITE_API_URL);

    const [drinks, setDrinks] = useState([])

    const asyncFetchCocktailByFirstLetter = async () => {
        // const resRaw = await fetch(`${import.meta.env.VITE_API_URL}${SEARCH_BY_FIRST_LETTER}`)
        // const json = await resRaw.json();

        // setDrinks(json.drinks)

        try {
            const response = await fw({
                url: import.meta.env.VITE_API_URL,
                endpoint: SEARCH_BY_FIRST_LETTER
            })

            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        // fetchCocktailsByFirstLetter()
        asyncFetchCocktailByFirstLetter()
    }, [])
    return (
        <div className='text-center'>
            <h1>FetchApi</h1>
            {drinks.map((drink) => (
                <p key={drink.idDrink}>{drink.strDrink}</p>
            ))}
        </div>
    )
}
