import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase-config'
import { motion } from 'framer-motion'

function Signup({ setUserMessage, setFormState }) {

    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpName, setSignUpName] = useState('')

    const signUp = async () => {
        try {
            const newUser = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            await updateProfile(newUser.user, { displayName: signUpName })
            setFormState('login')
            setUserMessage('Yay! you may now log in.')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.form animate={{ opacity: [0, 1] }} transition={{ duration: .7 }} onSubmit={(e) => {
            e.preventDefault()
            signUp()
        }}>
            <div className="form-group">
                <label htmlFor="name">Full Name <span style={{ fontSize: '.7em', opacity: '.7' }}>'Ethan Hunt'</span></label>
                <input type="text" name="name" id="su" className='inputBox' required autoComplete='off' onChange={e => setSignUpName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email @</label>
                <input type="email" name="email" id="su1" className='inputBox' required autoComplete='off' onChange={e => setSignUpEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password &#8226;&#8226;&#8226; </label>
                <input type="password" name="" id="" className='inputBox' autoComplete='off' required onChange={e => setSignUpPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Sign up" />
            </div>
            <div className="form-footer">
                <p>You're almost ready to post a blog!</p>
            </div>
        </motion.form>
    )
}

export default Signup