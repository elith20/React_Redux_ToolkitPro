import React, { useEffect } from "react";
import './registr.css';
import { useState } from "react";
import { useRegisterNewUserMutation } from "../../store/userApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Registration(){

    const successAuthorization = useSelector((state) => state.userReducer.successAuthorization)
    const [submitRegisterData,] = useRegisterNewUserMutation();
    const navigate = useNavigate();
    const [regData, setRegData] = useState(
        {
            fullname: '',
            email: '',
            password: '',
            confPassword: '',
        }
    ) 

    const [passwordError, setPasswordError] = useState(false);

    useEffect(()=>{
        if(successAuthorization){
            navigate('/')
        }
    }, [])

    const handleInputChanges = (e) =>{
        setRegData((prev) =>({
            ...prev,
            [e.target.name]: e.target.value
        }))       
    }

    const handleSubmitRegistr = (e) =>{
        e.preventDefault()
        console.log(regData)
        const{fullname, email, password, confPassword} = regData;
        console.log(regData)

        // if (!fullname || !email || !password || !confPassword) {
        //     return;
        // }
        
        if (password !== confPassword) {
            setPasswordError(true);
            return;
        } else {
            setPasswordError(false)
        }

        submitRegisterData({fullname, email, password})
        .then((res)=>{
            if (res.error) throw new Error('Registration field !!!');
            if (res.data.token) {
                navigate('/todo')
            }
        })
        .catch((err) => console.log(err))        
    }
    


    return (
        <div className="registr">
            <div className="registerArea">
                <h2>Registration</h2>
                <form>
                    <div className="first_line">
                        <div className="first_input">
                            <label htmlFor="name">Name Surname*</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={regData.fullname}
                                name= "fullname" 
                                placeholder="Enter your name"
                                onChange={handleInputChanges} 
                                autoComplete="off"/>
                        </div>
                        <div className="second_input">
                            <label htmlFor="email">Enter your email*</label>
                            <input 
                                type="email" 
                                value={regData.email}
                                id="email" 
                                name = "email" 
                                placeholder="Enter your email" 
                                onChange={handleInputChanges} 
                                autoComplete="off"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Create a password.</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={regData.password}
                            name="password"  
                            onChange={handleInputChanges} 
                            autoComplete="off"/>
                    </div>
                    <div>
                        <label htmlFor="message">Confirm the password.</label>
                        <input 
                            type="password" 
                            id="confpassword"
                            value={regData.confPassword} 
                            name="confPassword" 
                            onChange={handleInputChanges} 
                            autoComplete="off" />
                    </div>
                    <div className="button">
                        <input 
                            type="submit" 
                            value="Submit" 
                            id="submit"
                            onClick={handleSubmitRegistr}/>
                    </div>
                </form>
            </div>
        </div>)
}