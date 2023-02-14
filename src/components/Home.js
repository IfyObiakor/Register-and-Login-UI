import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/Logo.png"

function Home() {
    return (

            <header className="navbar bg-body-tertiary">
                <div className="container-fluid inner-header">
                    <img className="navbar-brand" src={logo} alt=""></img>
                    <Link to="/">Log Out</Link>
                </div>
            </header>
    
    )
}

export default Home;
