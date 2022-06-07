function Login({ setFormState, }) {
    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="email">Email @</label>
                <input type="email" name="email" id="log1" className='inputBox' required autoComplete='off' />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password &#8226;&#8226;&#8226; </label>
                <input type="password" name="" id="log2" className='inputBox' required autoComplete='off' />
            </div>
            <div className="form-group">
                <input type="submit" value="Log In" />
            </div>
            <div className="form-footer">
                <p>Not yet signed up? <span style={linkStyle} onClick={() => setFormState('signup')}>Click Here!</span></p>
            </div>
        </form>
    )
}

const linkStyle = {
    color: 'blue',
    cursor: 'pointer'
}

export default Login