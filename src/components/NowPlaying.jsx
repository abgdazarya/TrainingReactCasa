import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fw } from '../utils/fw'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const NowPlaying = () => {
    const [movies, setMovies] = useState([])
    const fetchPopular = async () => {
        try {
            const response = await fw({
                url: import.meta.env.VITE_API_URL,
                endpoint: 'now_playing'
            })

            const { results } = response
            console.log(results);
            setMovies(results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPopular()
    }, [])
    return (
        <div>
            <Navbar />
            <div>
                <Sidebar />
            </div>
            <div className='container w-2/4 mx-auto'>
                <h1 className='p-5 text-4xl font-bold text-rose-500'>Now Playing</h1>
                {movies.map(movie => (
                    <div className="flex justify-between px-5 py-5 m-5 rounded shadow-md bg-rose-500" key={movie.id}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} className="rounded shadow-sm" />
                        <div className='ml-5'>
                            <h1 className='text-3xl font-bold text-left text-slate-900'>{movie.title}</h1>
                            <p className='mt-3 text-slate-700'>{movie.overview}</p>
                            <div className='mt-5'>
                                <Link className='p-3 font-medium rounded bg-rose-300 hover:bg-indigo-400' to={`${movie.id}`}>
                                    Detail Movie
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
