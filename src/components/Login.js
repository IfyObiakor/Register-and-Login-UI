import React, { useState } from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import googleIcon from "../images/google_icon.png"
import logo from "../images/Logo.png"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  
  const updateUsername = (e) => {
    setUsername(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/home")
  }



  return (
    <div className='form-container'>
      <form className='form-body' onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt=""></img>
        <h1 className='mb-4'>Welcome</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control input-box" value={username} onChange={updateUsername} required />
        </div>
        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control input-box" value={password} onChange={updatePassword} required />
        </div>
        <button type="submit" className="btn">Sign in</button>
        <div className='forgot-pwd mb-4'><Link to="/passwordreset">Forgot Password?</Link></div>
        <div className='signin-routes mb-3'><img src={googleIcon} alt=""></img>  Sign in with Google</div>
        <div className='signin-routes mb-3'><AppleIcon/> Sign in with Apple</div>
        <div className='signup-link'>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
