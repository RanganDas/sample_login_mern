import { React, useState } from 'react'
//import googleIcon from './google.png'
import './all.css';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/forgot-password', {email})
        .then( res=>{           
            if(res.data.Status==="SUCCESSFUL"){
                navigate('/login')
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
                        placeholder="Enter your email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-btn">
                    Continue
                </button>

            </form>
        </div>
    )
}

export default ForgotPassword;