import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/textlogo.png'
import { useDispatch, useSelector } from "react-redux";
import { setAutorization } from "../../store/authreducer";
import { getToken, removeToken } from "../../utils/utils";


export default function Navbar(){
    const successAuth = useSelector((state)=>state.userReducer.successAuthorization);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggleManu, setToggleManu] = useState(false);
    const [displayWidth, setDisplayWidth] = useState();

    const handleLogOut = ()=>{
        dispatch(setAutorization(false));
        removeToken();
        if(!getToken()){
            navigate('/')
        }
    }

    const handleToggleManu = ()=>{
        setToggleManu(!toggleManu)
    }

    useEffect(()=>{

        const changeSize = ()=>{
            setDisplayWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeSize)
    }, [])

    return <>
    <div className="navigation">
        <div>
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="manubuttoncomb">
            <button className="hamburger" onClick={handleToggleManu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            {(toggleManu || displayWidth > 767) && 
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
            </div>}
            <div>
            {successAuth ?
                <button className="signinbtn" onClick={handleLogOut}>Log Out</button>
            :
                <button className="signinbtn"><Link to='/signin' >Sign In</Link></button>
            }
        </div>
        </div>
        
        
    </div>
    </>
    
}