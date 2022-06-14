import React, { createContext, useState } from 'react'

const BlogContext = createContext('')

export function BlogProvider({children}) {

    const [userMessage, setUserMessage] = useState('')
    const [messageColor, setMessageColor] = useState('')
    const [formState, setFormState] = useState('login')
    const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'))
    const [isActive, setIsActive] = useState()

    const value = {
        userMessage,
        setUserMessage, 
        messageColor,
        setMessageColor,
        formState,
        setFormState,
        isAuth,
        setIsAuth,
        isActive,
        setIsActive
    }

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext