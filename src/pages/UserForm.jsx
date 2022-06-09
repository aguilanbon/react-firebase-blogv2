import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

function UserForm({ formState, setFormState, setIsAuth }) {

    const [userMessage, setUserMessage] = useState('')
    const [messageColor, setMessageColor] = useState('')

    return (
        <div className='user-form'>
            {userMessage === '' ? '' :
                <div className={`userMessage-container ${messageColor}`}>
                    <h2>{userMessage}</h2>
                </div>
            }
            <div className="form-container">
                {formState === 'login' && <Login setFormState={setFormState} setIsAuth={setIsAuth} setUserMessage={setUserMessage} setMessageColor={setMessageColor} />}
                {formState === 'signup' && <Signup setFormState={setFormState} setUserMessage={setUserMessage} setMessageColor={setMessageColor} />}
            </div>
        </div>
    )
}

export default UserForm