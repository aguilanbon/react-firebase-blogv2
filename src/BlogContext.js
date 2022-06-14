import React, { createContext, useState } from 'react'

const BlogContext = createContext('')

export function BlogProvider({children}) {

    const [userMessage, setUserMessage] = useState('')
    const [messageColor, setMessageColor] = useState('')

    const value = {
        userMessage,
        setUserMessage, 
        messageColor,
        setMessageColor
    }

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext