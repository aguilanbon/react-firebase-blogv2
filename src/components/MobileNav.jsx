import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function MobileNav({ setFormState, setShowMobileNav, isAuth, signOutWithGoogle, isActive, setIsActive }) {
    return (
        <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: .3 }} className="mobile-nav">
            <div className="close-btn">
                <p onClick={() => setShowMobileNav(false)}>X</p>
            </div>
            <ul>
                <li className={isActive === 'home' ? `active` : ''}>
                    <Link to='/' onClick={() => {
                        setIsActive('home')
                        setShowMobileNav(false)
                    }}>Home</Link>
                </li>
                {isAuth &&
                    <>
                        <li className={isActive === 'create' ? `active` : ''}>
                            <Link to='/blog/create' onClick={() => {
                                setIsActive('create')
                                setShowMobileNav(false)
                            }}>Create</Link>
                        </li>
                        <li>
                            <button className='logout' href='#' onClick={() => {
                                setIsActive('')
                                signOutWithGoogle()
                            }}>Sign out</button>
                        </li>
                    </>
                }
                {!isAuth && <li>
                    <Link to='/user/login' onClick={() => {
                        setShowMobileNav(false)
                        setFormState('login')
                    }}>Log in</Link>
                </li>}
            </ul>
        </motion.div>
    )
}

export default MobileNav