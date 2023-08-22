import React, {useState, } from "react";
import classes from './EditTask.module.css'
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { editingTask, putEditedTaskOnList } from "../../store/taskReducer";
import { useEditTaskMutation } from "../../store/api";

export default function EditTaskModal(){

    const [saveEditedTask] = useEditTaskMutation();
    const editTaskData = useSelector((state) => state.taskReducer.editTask);
    const dispatch = useDispatch();
    const [editedTask, setEditedTask] = useState(editTaskData);

    const handleTitleValue = (event) => {
        const newFormData = {
            ...editedTask,
            title: event.target.value
        };
        setEditedTask(newFormData) 
    }
    
    const handleDescriptionValue = (event) => {
        const newFormData = {
            ...editedTask,
            description: event.target.value
        };
        setEditedTask(newFormData) 
    }
    
    const handleRadioChange = (event) => {
        const newFormData = {
            ...editedTask,
            importance: event.target.value,
        };
        setEditedTask(newFormData);
    }

    const handleSelectValueChange = (event) => {


        const newFormData = {
            ...editedTask,
            developer: event.target.value,
        };
        setEditedTask(newFormData);
    }

    const handleStartDate = (event) => {
        const newFormData = {
            ...editedTask,
            startDate: event.target.value,
        };
        setEditedTask(newFormData);
    }

    const handleEndDate = (event) => {
        const newFormData = {
            ...editedTask,
            endDate: event.target.value,
        };
        setEditedTask(newFormData);
    }

    const handleSaveEditedTask = () =>{
        // console.log(editedTask)
        saveEditedTask(editedTask)
        .then((res) => {
            dispatch(putEditedTaskOnList(res));
            dispatch(editingTask(null)); 
        })
    }

    const handleAddKeyDown = (event) =>{
        if(event.key === 'Enter'){
            handleSaveEditedTask()
        }
    }

    return(
        <div>
            <Modal 
                size="md"
                show = {true}
                onHide={() => dispatch(editingTask(null))}            
            >
            
            <form 
                className={classes.Form} 
                onKeyDown={handleAddKeyDown} 
                >
                <label htmlFor="title"><h4>Title</h4></label>
                <input 
                    className={classes.formTitle}
                    type="text"
                    id="title"
                    value={editedTask.title}
                    placeholder="Task name..."
                    onChange={handleTitleValue} />
                            
                <label htmlFor="description"><h4>Description</h4></label>
                <input
                    className={classes.description}
                    as="textarea"
                    id="description"
                    value={editedTask.description}
                    placeholder="Describe task..."
                    autoComplete="off"
                    onChange={handleDescriptionValue}
                /> 
                <label><h4>Choose importance </h4></label>
                <div className={classes.importance}>
                    <div>
                        <label htmlFor="high"> High </label>
                        <input
                            id="high"
                            value="High"
                            name="importance"
                            type="radio"
                            checked={editedTask.importance === 'High'}
                            onChange={handleRadioChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="medium" > Medium </label>
                        <input
                            id="medium"
                            value="Medium"
                            name="importance"
                            type="radio"
                            checked={editedTask.importance === 'Medium'}
                            onChange={handleRadioChange}
                        />
                    </div>
                    <div>
                        <label>Low </label>
                        <input
                            id="low"
                            value="Low"
                            name="importance"
                            type="radio"
                            checked={editedTask.importance === 'Low'}
                            onChange={handleRadioChange}
                        />
                    </div>
                </div>    
                
                <label ><h4>Choose duration</h4></label>
                <div className={classes.date}>
                    <div>
                        <label htmlFor="startdate">Start Date</label>
                        <input
                            type="date"
                            id="startdate"
                            value={editedTask.startDate}
                            onChange={handleStartDate} />
                    </div>
                    <div>
                        <label htmlFor="enddate">End Date</label>
                        <input
                            type="date"
                            id="enddate"
                            value={editedTask.endDate}
                            onChange={handleEndDate} />
                    </div>
                </div>
            
                <label htmlFor="developers"><h4>Choose a developer:</h4></label>
                <select
                    name="developers"
                    value={editedTask.developer}
                    onChange={handleSelectValueChange}
                    className={classes.developer}>
                    <option value=''>Developer</option>
                    <option value="Dolera">Dolera</option>
                    <option value="Aksana">Aksana</option>
                    <option value="Developer 3">Developer 3</option>
                    <option value="Developer 4">Developer 4</option>
                    <option value="Developer 5">Developer 5</option>
                </select>
                <div className={classes.footerBtns}>
                    <button
                        onClick={handleSaveEditedTask} 
                        // disabled={props.disabledButton}
                        > Save changes
                    </button>
                    <button
                        // onClick={onClose}
                        // disabled={props.disabledButton}
                        > Cancel
                    </button>
                </div>
            </form>
            {/* </div> */}
        </Modal>
    </div>
    )
}