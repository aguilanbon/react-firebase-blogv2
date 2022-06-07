import React from 'react'

function Signup() {
    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="name">Full Name <span style={{ fontSize: '.7em', opacity: '.7' }}>'Ethan Hunt'</span></label>
                <input type="text" name="name" id="su" className='inputBox' required autoComplete='off' />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email @</label>
                <input type="email" name="email" id="su1" className='inputBox' required autoComplete='off' />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password &#8226;&#8226;&#8226; </label>
                <input type="password" name="" id="" className='inputBox' autoComplete='off' required />
            </div>
            <div className="form-group">
                <input type="submit" value="Sign up" />
            </div>
            <div className="form-footer">
                <p>You're almost ready to post a blog!</p>
            </div>
        </form>
    )
}

export default Signup