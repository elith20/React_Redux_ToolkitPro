import React, { useEffect } from "react";
import './login.css';
import { useState } from "react";
import {  useSignInMutation } from "../../store/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAutorization } from "../../store/authreducer";
import { setToken } from "../../utils/utils";

export default function Login(){

    const successAuthorization = useSelector((state) => state.userReducer.successAuthorization);
    const dispatch = useDispatch();
    const [signIn] = useSignInMutation();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
            email: '',
            password: '',
    }) 

    useEffect(()=>{
        if(successAuthorization){
            navigate('/')
        }
    }, [])

    const handleInputChanges = (e) =>{
        setLoginData((prev) =>({
            ...prev,
            [e.target.name]: e.target.value
        }))       
    }

    const handleSignIn = (e) =>{
        e.preventDefault()
        const{email, password} = loginData;

        // if (!email || !password) {
        //     return;
        // }

        signIn({password})
        .then((res)=>{
            if (res.error) throw new Error('Registration field !!!');
            if (res.data.token) {
                dispatch(setAutorization(true));
                setToken(res.data.token);
                navigate('/todo')
            }
        })
        // .catch((err) => console.log(err))        
    }
    
    return (
        <div className="registr">
            <div className="main">
                <h2>Login</h2>
                <form>
                    <div>
                        <label htmlFor="email">Enter your email.</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={loginData.email}
                            name="email"  
                            onChange={handleInputChanges} 
                            autoComplete="off"/>
                    </div>
                    <div>
                        <label htmlFor="password">Enter your password.</label>
                        <input 
                            type="password" 
                            id="password"
                            value={loginData.password} 
                            name="password" 
                            onChange={handleInputChanges} 
                            autoComplete="off" />
                    </div>
                    <div className="button">
                        <input 
                            type="submit" 
                            value="Log In" 
                            id="submit"
                            onClick={handleSignIn}/>
                    </div>
                </form>
            </div>
        </div>)
}