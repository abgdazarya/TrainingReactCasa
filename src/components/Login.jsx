import React, { useState } from 'react'

export const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    return (
        <div>
            <h1>Login</h1>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Nama' />
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
            <button className='p-4 rounded bg-slate-700'>Submit</button>
        </div>
    )
}
