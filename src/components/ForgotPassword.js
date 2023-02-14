import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/Logo.png"
import WestIcon from '@mui/icons-material/West';

function ForgotPassword() {
  return (
    <div className='form-container'>
       <form className='form-body'>
        <img className='mb-4' src={logo} alt=""></img>
        <h1 className='mb-4'>Reset Password</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">New Password</label>
          <input type="password" class="form-control input-box" id="exampleInputPassword1" />
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
          <input type="password" class="form-control input-box" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn mb-4">Reset Password</button>
       
        <div className='signup-link'>
          <Link to="/"><WestIcon fontSize='small'/> Back to Login</Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
