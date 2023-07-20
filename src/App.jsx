import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HelloWorld } from './components/HelloWorld'
import { Users } from './components/Users'
import { BasketScoring } from './components/BasketScoring'
import { BadmintonScoring } from './components/BadmintonScoring'
import { ReducerState } from './components/ReducerState'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { fw } from './utils/fw'
import { Link } from 'react-router-dom'
import { Theming } from './components/Theming'
import { ThemeProvider } from './components/ThemeContext'
import { Login } from './components/Login'

function App() {
  const [movies, setMovies] = useState([])
  const fetchPopular = async () => {
    try {
      const response = await fw({
        url: import.meta.env.VITE_API_URL,
        endpoint: 'popular'
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
        <h1 className='p-5 text-4xl font-bold'>Popular</h1>
        {movies.map(movie => (
          <div className="flex justify-between px-5 py-5 m-5 rounded shadow-md bg-slate-800" key={movie.id}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} className="rounded shadow-sm" />
            <div className='ml-5'>
              <h1 className='text-3xl font-bold text-left text-slate-300'>{movie.title}</h1>
              <p className='mt-3 text-slate-400'>{movie.overview}</p>
              <div className='mt-5'>
                <Link className='p-3 font-medium bg-indigo-600 rounded hover:bg-indigo-400' to={`popular/${movie.id}`}>
                  Detail Movie
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <ThemeProvider>
        <Theming />
      </ThemeProvider> */}
      {/* <Login /> */}
    </div>
  )
}

export default App
