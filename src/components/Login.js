import React from 'react'
import { useState } from 'react'

const Login = ({onLogin}) => {

    const [user, setUser] = useState({name:"", password:""})

    const handleSubmit = (event) => {
        event.preventDefault()
        onLogin(user.name, user.password)
    }

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label> 
                    <input type="text" 
                        onChange={(event) => setUser({...user, name: event.target.value})}
                    />
                </div>
                <div>
                    <label>Password:</label> 
                    <input type="password" 
                        onChange={(event) => setUser({...user, password: event.target.value})}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login