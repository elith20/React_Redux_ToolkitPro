import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../../images/textlogo.png'


export default function Navbar(){

    return <>
    <div className="navigation">
        <div>
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="manu">
            <Link to='/'>
                Home
            </Link>
            <Link to='/todo'>
                Tasks
            </Link>
            <Link to='/about'>
                About 
            </Link>
        </div>
        <div>
            <button className="signinbtn"><Link to='/register' >Sign In</Link></button>
        </div>
        
    </div>
    </>
    
}