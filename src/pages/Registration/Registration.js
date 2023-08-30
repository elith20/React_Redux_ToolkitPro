import React from "react";
import './registr.css';
import { useState } from "react";

export default function Registration(){

    let [regData, setRegData] = useState(
        {
            fullname: '',
            email: '',
            password: '',
            confPassword: '',
        }
    ) 

    const handleInputChanges = (e) =>{
        setRegData((prev) =>({
            ...prev,
            [e.target.name]: e.target.value
        }))       
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(regData)
        regData = {
            fullname: '',
            email: '',
            password: '',
            confPassword: '',
        }
        console.log(regData)
    }
    


    return (
        <div className="registr">
            <div className="main">
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
                            onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>)
}