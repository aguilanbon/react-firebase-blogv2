import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MobileNav from './MobileNav'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useContext } from 'react'
import BlogContext from '../BlogContext'

function Navbar() {

  const { setUserMessage, setFormState, isAuth, setIsAuth, setIsActive, isActive } = useContext(BlogContext)
 
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const [showMobileNav, setShowMobileNav] = useState(false)

  let navigate = useNavigate()

  const signOutWithGoogle = () => {
    signOut(auth)
    setIsAuth(false)
    localStorage.clear()
    navigate('/user/login')
    setShowMobileNav(false)
  }

  useEffect(() => {
    let handler = document.addEventListener('mousedown', (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMobileNav(false)
      }
    })

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])


  useEffect(() => {
    const closeNavOnScreenSiz = () => {
      if (navRef.current.offsetWidth > 480) {
        setShowMobileNav(false)
      }
    }

    closeNavOnScreenSiz()
  })

  return (
    <div className="navbar-container" ref={menuRef}>
      <div className="nav" ref={navRef}>
        {!showMobileNav &&
          <ul>
            <i onClick={() => setShowMobileNav(true)} id='hamburger-btn' style={{ color: 'white' }} className="fas fa-solid fa-bars"></i>
            <li className={isActive === 'home' ? `active` : ''} onClick={() => setIsActive('home')}><Link to='/' >Home</Link></li>
            {isAuth &&
              <>
                <li className={isActive === 'create' ? `active` : ''} onClick={() => setIsActive('create')}><Link to='/blog/create' >Create</Link></li>
                <li><button className='logout' href='#' onClick={() => {
                  setIsActive('')
                  signOutWithGoogle()
                }}>Sign out</button></li>
              </>
            }
            {!isAuth && <li className={isActive === 'login' ? `active` : ''}><Link to='/user/login' onClick={() => {
              setIsActive('login')
              setFormState('login')
              setUserMessage('')
            }}>Log in</Link></li>}
          </ul>
        }
      </div>
      {
        showMobileNav &&
        <MobileNav setFormState={setFormState} setShowMobileNav={setShowMobileNav} isAuth={isAuth} signOutWithGoogle={signOutWithGoogle} setIsActive={setIsActive} isActive={isActive} />
      }
    </div >
  )
}

export default Navbar