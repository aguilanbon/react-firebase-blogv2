import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

function UserForm({ formState, setFormState, setIsAuth }) {

    const [userMessage, setUserMessage] = useState('')

    return (
        <div className='user-form'>
            {userMessage === '' ? '' :
                <div className="userMessage-container">
                    <h2>{userMessage}</h2>
                </div>
            }
            <div className="form-container">
                {formState === 'login' && <Login setFormState={setFormState} setIsAuth={setIsAuth} setUserMessage={setUserMessage} />}
                {formState === 'signup' && <Signup setFormState={setFormState} setUserMessage={setUserMessage} />}
            </div>
        </div>
    )
}

export default UserForm