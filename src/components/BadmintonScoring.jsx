import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const BadmintonScoring = () => {
    const [team2, setTeam2] = useState(0)
    const [team1, setTeam1] = useState(0)
    return (
        <>
            <Navbar />
            <div>
                <Sidebar />
            </div>
            <div className='p-6 ml-8'>
                <h1>
                    Score
                </h1>
                <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div className="leftside">
                        <h2 className='text-2xl font-bold text-center'>Team 1</h2>
                        <h3 className='my-5 text-5xl font-semibold text-center'>{team1}</h3>
                        <button className='px-6 py-3 m-1 text-white bg-slate-700' onClick={() => setTeam1(team1 + 1)}>Tambah Poin Team 1</button>
                    </div>
                    <div className="rightside">
                        <h2 className='text-2xl font-bold text-center'>Team 2</h2>
                        <h3 className='my-5 text-5xl font-semibold text-center'>{team2}</h3>
                        <button className='px-6 py-3 m-1 text-white bg-slate-700' onClick={() => setTeam2(team2 + 1)}>Tambah Poin Team 2</button>
                    </div>
                </div>
            </div>
        </>
    )
}
