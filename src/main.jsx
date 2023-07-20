import { Navbar, Sidebar } from 'flowbite-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { BadmintonScoring } from './components/BadmintonScoring.jsx'
import { BasketScoring } from './components/BasketScoring.jsx'
import { DetailMovie } from './components/DetailMovie.jsx'
import { HelloWorld } from './components/HelloWorld.jsx'
import { NowPlaying } from './components/NowPlaying.jsx'
import { Upcoming } from './components/Upcoming.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "nowplaying",
    element: <NowPlaying />,
  },
  {
    path: "upcoming",
    element: <Upcoming />
  },
  {
    path: "nowplaying/:idmovie",
    element: <DetailMovie />
  },
  {
    path: "popular/:idmovie",
    element: <DetailMovie />
  },
  {
    path: "upcoming/:idmovie",
    element: <DetailMovie />
  },
  {
    path: "basketscoring",
    element: <BasketScoring />
  },
  {
    path: "badmintonscoring",
    element: <BadmintonScoring />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
