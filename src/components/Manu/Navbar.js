import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar(){

    return <>
    <div className="navigation">
        <div>Logo</div>
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
            <button><Link to='/register' >Sign In</Link></button>
        </div>
        
    </div>
    </>
    
}