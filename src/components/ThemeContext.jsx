import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true)
    const value = {
        isLight,
        setIsLight
    }
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme && theme === "light") {
            setIsLight(true)
        } else {
            setIsLight(false)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('theme', isLight ? "light" : "dark")
    }, [isLight])
    return (
        <div>
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export { ThemeContext }