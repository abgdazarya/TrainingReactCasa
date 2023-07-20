import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Theming = () => {
    const { isLight, setIsLight } = useContext(ThemeContext)
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", width: "100vw", backgroundColor: isLight ? "white" : "black" }}>
            <h1 style={{ color: isLight ? "black" : "white" }}>Theming</h1>
            <button style={{ color: isLight ? "black" : "white" }} onClick={() => setIsLight(!isLight)} >Change Theme</button>
        </div>
    )
}
