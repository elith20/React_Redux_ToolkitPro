import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Tostify() {
    const errorMessage = useSelector((state)=> state.taskReduser.errorMessage);
    const successMessage = useSelector((state)=> state.taskReduser.successMessage);
    const editedMessage = useSelector((state)=> state.taskReduser.editedMessage)

    useEffect (()=>{
        if(errorMessage){
            toast.error(errorMessage)
        }
        if(successMessage){
            toast.success(successMessage)
        }
        if(editedMessage){
            toast.success(editedMessage)
        }
    }, [errorMessage, successMessage, editedMessage])

    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
    )
}