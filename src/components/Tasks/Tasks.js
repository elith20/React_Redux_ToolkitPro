import React from "react";
import classes from './Tasks.module.css'
import { useState } from "react";
import { useDeleteTaskMutation, useEditTaskMutation } from "../../store/api";
import { useDispatch, useSelector } from "react-redux";
import { removeSingleTask, editingTask } from "../../store/taskReducer";
import { setErrorMessage, setSuccessMessage } from "../../store/taskReducer";

export default function Tasks({item}){
    // const {item } = props;
    
    const dispatch = useDispatch();
    const [ deleteTask ] = useDeleteTaskMutation();
    

    const handleDeleteTask = (id) => {
        deleteTask(id)
        .then((res)=>{
            dispatch(removeSingleTask(id))
            dispatch(setSuccessMessage(`Task was deleted!!!`))
        })
        .catch((error)=>
            dispatch(setErrorMessage('Task did not deleted...')))
    }


    return(
    // <div className={!isChecked? classes.card : classes.checkedCard}>
    <div className={classes.card}>
        <input
            // onChange={() => toggleCheckbox(item.id)}
            className={classes.cardCheckbox} 
            type="checkbox"
        />
        <h3 className={classes.CardTitle}>{item.title}</h3>
        <div className={classes.items}>
            <div className={classes.describe}>
                <p>Description:</p>
                {item.description} 
            </div>
            <div>
                <p>Importance:</p>
                {item.importance}
            </div>
            <div>
                <p>Start date:</p>
                {item.startdate}
            </div>
            <div>
                <p >End date: </p>
                {item.enddate}
            </div>
            <div>
                <p>Developer: </p>
                {item.developer}
                </div>
        </div>
        <div className={classes.btn}>
            <button
                className={classes.cardBtn}
                onClick={()=> dispatch(editingTask(item))}
                // disabled={disabledButton}
                >Edit Task
            </button>
            <button
                className={classes.cardBtn}
                onClick={() => handleDeleteTask(item.id)}
                // disabled={disabledButton}
                >Delete Task
            </button>
        </div>
    </div>
)}


