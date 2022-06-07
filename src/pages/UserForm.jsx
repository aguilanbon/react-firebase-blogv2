import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

function UserForm({ formState, setFormState }) {
    return (
        <div className='user-form'>
            <h1 style={{ opacity: '.8' }}>Hi! Time to log back in!</h1>
            <div className="form-container">
                {formState === 'login' && <Login setFormState={setFormState} />}
                {formState === 'signup' && <Signup />}
            </div>
        </div>
    )
}

export default UserForm