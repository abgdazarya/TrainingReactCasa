import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fw } from '../utils/fw'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const DetailMovie = () => {
    const [movie, setMovie] = useState({})
    const { idmovie } = useParams()
    const getDetailMovie = async () => {
        try {
            const response = await fw({
                url: import.meta.env.VITE_API_URL,
                endpoint: `${idmovie}`
            })

            // const { results } = response
            console.log(response);
            setMovie(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getDetailMovie()
    }, [])
    return (
        <div>
            <Navbar />
            <div>
                <Sidebar />
            </div>
            <div className='container w-2/4 mx-auto'>
                <h1 className='p-5 text-4xl font-bold text-emerald-700'>Detail Movie</h1>
                <div className="flex justify-between px-5 py-5 m-5 rounded shadow-md bg-emerald-800" key={movie.id}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} className="rounded shadow-sm" />
                    <div className='ml-5'>
                        <h1 className='text-3xl font-bold text-left text-slate-300'>{movie.title}</h1>
                        <h3 className='mt-3 text-lg text-slate-200'>Status: {movie.status}</h3>
                        <h4 className='mt-3 text-lg text-slate-200'>Vote average: {movie.vote_average}</h4>
                        <p className='mt-3 text-slate-400'>{movie.overview}</p>
                        <p className='mt-3 text-lg text-slate-200'>Tagline: {movie.tagline}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
