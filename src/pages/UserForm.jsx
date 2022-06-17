import React, { useState, useContext } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import BlogContext from '../BlogContext';
import Alerts from '../components/Alerts'

function UserForm() {

    const { messageColor, userMessage, setMessageColor, setUserMessage, formState, setFormState, setIsAuth, isAuth } = useContext(BlogContext)

    return (
        <div className='user-form'>
            {userMessage === '' ? '' :
                <Alerts messageColor={messageColor} userMessage={userMessage}></Alerts>
            }
            <div className="form-container">
                {formState === 'login' && <Login setFormState={setFormState} setIsAuth={setIsAuth} setUserMessage={setUserMessage} setMessageColor={setMessageColor} isAuth={isAuth} />}
                {formState === 'signup' && <Signup setFormState={setFormState} setUserMessage={setUserMessage} setMessageColor={setMessageColor} isAuth={isAuth} />}
            </div>
        </div>
    )
}

export default UserForm