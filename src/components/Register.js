import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppleIcon from '@mui/icons-material/Apple';
import googleIcon from "../images/google_icon.png"
import logo from "../images/Logo.png"
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const updateUsername = (e) => {
    setUsername(e.target.value)
  }
  const updateEmail = (e) => {
    setEmail(e.target.value)
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
        <h1 className='mb-4'>Create an Account</h1>
        <div className="mb-2">
          <label className="form-label">Username</label>
          <input type="text" className="form-control input-box" value={username} onChange={updateUsername} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input type="email" class="form-control input-box" value={email} onChange={updateEmail} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Password</label>
          <input type="password" className="form-control input-box" value={password} onChange={updatePassword} required />
        </div>
        
        <div className='mb-2 tandc'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</div>
        <button type="submit" className="btn mb-4">Sign up</button>

        <div className='signin-routes mb-3'><img src={googleIcon} alt=""></img> Sign up with Google</div>
        <div className='signin-routes mb-3'><AppleIcon /> Sign up with Apple</div>
        <div className='signin-link'>
          <p>Already have an account?</p>
          <Link to="/">Sign in</Link>
        </div>
      </form>
    </div>
  )
}

export default Register
