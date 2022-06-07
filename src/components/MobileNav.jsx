import React from 'react'
import { Link } from 'react-router-dom'

function MobileNav({ setFormState, setShowMobileNav }) {
    return (
        <div className="mobile-nav">
            <div className="close-btn">
                <p onClick={() => setShowMobileNav(false)}>X</p>
            </div>
            <ul>
                <li>
                    <Link to='/' onClick={() => setShowMobileNav(false)}>Home</Link>
                </li>
                <li>
                    <Link to='/blog/create' onClick={() => setShowMobileNav(false)}>Create</Link>
                </li>
                <li>
                    <Link to='/user/login' onClick={() => {
                        setShowMobileNav(false)
                        setFormState('login')
                    }}>Log in</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav