import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MobileNav from './MobileNav'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

function Navbar({ setFormState, isAuth, setIsAuth }) {

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
            <li><Link to='/' >Home</Link></li>
            {isAuth &&
              <>
                <li><Link to='/blog/create' >Create</Link></li>
                <li><button className='logout' href='#' onClick={signOutWithGoogle}>Sign out</button></li>
              </>
            }
            {!isAuth && <li><Link to='/user/login' onClick={() => setFormState('login')}>Log in</Link></li>}
          </ul>
        }
      </div>
      {
        showMobileNav &&
        <MobileNav setFormState={setFormState} setShowMobileNav={setShowMobileNav} isAuth={isAuth} signOutWithGoogle={signOutWithGoogle} />
      }
    </div >
  )
}

export default Navbar