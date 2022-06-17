import { auth, provider } from '../firebase-config'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

function Login({ setFormState, setIsAuth, setMessageColor, setUserMessage, isAuth }) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    let navigate = useNavigate()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider)
        setIsAuth(true)
        localStorage.setItem('auth', true)
        navigate('/')
    }

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            setIsAuth(true)
            localStorage.setItem('auth', true)
            navigate('/')
        } catch (error) {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setMessageColor('danger')
                setUserMessage('Email or Password Incorrect')
            }
        }
    }

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    })

    return (
        <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: .7 }} className="googleAuth-container">
            <button onClick={signInWithGoogle}><img src="../google.png" alt="" /> Sign in with Google</button>
            <form onSubmit={e => {
                e.preventDefault()
                signIn()
            }}>
                <div className="form-group">
                    <label htmlFor="email">Email @</label>
                    <input type="email" name="email" id="log1" className='inputBox' required autoComplete='off' onChange={e => setSignInEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password &#8226;&#8226;&#8226; </label>
                    <input type="password" name="" id="log2" className='inputBox' required autoComplete='off' onChange={e => setSignInPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <motion.input whileHover={{ scale: 1.1 }} whileTap={{ scaleX: 0.9 }} type="submit" value="Log In" />
                </div>
                <div className="form-footer">
                    <p>Not yet signed up? <span style={linkStyle} onClick={() => {
                        setUserMessage('')
                        setFormState('signup')
                    }}>Click Here!</span></p>
                </div>
            </form>
        </motion.div>
    )
}

const linkStyle = {
    color: 'blue',
    cursor: 'pointer'
}

export default Login