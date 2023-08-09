import { React, useState } from 'react'
//import googleIcon from './google.png'
import './all.css';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then( result=>{
            console.log(result)
            if(result.data==="SUCCESSFUL"){
                navigate('/home')
            }           
        })
        .catch(err=> console.log(err))

    }
    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>                   
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name='email'
                        placeholder="Email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        name='password'
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-link">
                    <Link to="/forgot-password">Forgot password</Link>
                </div>
                <button type="submit" className="login-btn">
                    Login
                </button>
                <div className="text-center mt-3">
                    <p className="or-text">Dont have an account</p>
                </div>
                <div className="login-link">
                    <Link to="/register">Register</Link>
                </div>
                
            </form>
        </div>
    )
}
export default Login