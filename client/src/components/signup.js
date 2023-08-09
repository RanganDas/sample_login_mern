import { React, useState } from 'react'
//import googleIcon from './google.png'
import './all.css';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name, email, password})
        .then( result=>{
            console.log(result)
            navigate('/login')
        })
        .catch(err=> console.log(err))

    }


    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>                   
                <div className="form-group">
                    <input
                        type="text"
                        name='name'
                        id="fullName"
                        className="form-control"s
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <button type="submit" className="login-btn">
                    Create account
                </button>
                <div className="text-center mt-3">
                    <p className="or-text">Already have account</p>
                </div>
                <div className="login-link">
                    <Link to="/login">Login</Link>
                </div>
                
                
            </form>
        </div>
    )
}
export default Signup