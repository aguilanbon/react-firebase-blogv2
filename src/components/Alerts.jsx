import React from 'react'
import { useContext } from 'react'
import BlogContext from '../BlogContext'

function Alerts() {

    const {messageColor, userMessage} = useContext(BlogContext)

    return (
        <div className={`userMessage-container ${messageColor}`}>
            <h2>{userMessage}</h2>
        </div>
    )
}

export default Alerts