import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const BasketScoring = () => {
    const [textScore, setTextScore] = useState(0)
    return (
        <>
            <Navbar />
            <div>
                <Sidebar />
            </div>
            <div className='flex justify-center'>
                <div className='p-8'>
                    <h1 className='font-bold text-center'>Score</h1>
                    <h2 className='text-3xl text-center'>{textScore}</h2>
                    <div className="mt-5 container-btn">
                        <button className='px-6 py-3 m-1 text-white bg-slate-700' onClick={() => setTextScore(textScore + 1)}>1</button>
                        <button className='px-6 py-3 m-1 text-white bg-slate-700' onClick={() => setTextScore(textScore + 2)}>2</button>
                        <button className='px-6 py-3 m-1 text-white bg-slate-700' onClick={() => setTextScore(textScore + 3)}>3</button>
                    </div>
                </div>
            </div>
        </>
    )
}
