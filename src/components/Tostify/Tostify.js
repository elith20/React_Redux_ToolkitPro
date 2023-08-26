import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Tostify() {
    const coution = useSelector((state)=> state.taskReducer.errorMessage);
    const succeed = useSelector((state)=> state.taskReducer.successMessage);
    const edited = useSelector((state)=> state.taskReducer.editedMessage)


    useEffect (()=>{
        if(coution){
            toast.error(coution)
        }
        if(succeed){
            toast.success(succeed)
        }
        if(edited){
            toast.success(edited)
        }
    }, [coution, succeed, edited])

    return (
        <ToastContainer
            position="top-center"
            autoClose={2000}
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