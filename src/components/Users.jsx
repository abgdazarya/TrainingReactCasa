import React, { useState } from 'react'
import { Anything } from './Anything'

export const Users = () => {
    const [textScore, setTextScore] = useState(0)
    return (
        <div className='text-center'>
            <h1 className='font-bold text-4xl'>USERS</h1>
            <h2>{textScore}</h2>
            <div className="container-btn">
                <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTextScore(textScore + 1)}>1</button>
                <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTextScore(textScore + 2)}>2</button>
                <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTextScore(textScore + 3)}>3</button>
            </div>
        </div>
    )
}
