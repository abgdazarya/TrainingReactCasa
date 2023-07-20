import React from 'react'
import { Anything } from './Anything'

export const HelloWorld = () => {
    const fruits = ['apple', 'banana', 'cherry']
    return (
        <div className='text-center w-100'>
            <h1>Hello</h1>
            <div>
                {fruits.map(fruit => <Anything name={fruit} />)}
            </div>
        </div>
    )
}
