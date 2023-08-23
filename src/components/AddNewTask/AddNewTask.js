import { addNewTask, setErrorMessage, setSuccessMessage } from "../../store/taskReducer";
import { useAddTaskMutation, } from "../../store/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './AddNewTask.css'
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";




export const AddNewTask = ({onClose})=>{

    const [addNewTaskRequest] = useAddTaskMutation();
    const dispatch = useDispatch();
    const[inputFields, setInputFields] = useState({
        title: "",
        description: "",
        importance: "",
        startDate: "",
        endDate: "",
        developer: "",
    });

        
    const handleTitleValue = (event) => {
        const newFormData = {
            ...inputFields,
            title: event.target.value
        };
        setInputFields(newFormData) 
    }

      
    const handleDescriptionValue = (event) => {
        const newFormData = {
            ...inputFields,
            description: event.target.value
        };
        setInputFields(newFormData) 
    }
    
    const handleRadioChange = (event) => {
        const newFormData = {
            ...inputFields,
            importance: event.target.value,
        };
        setInputFields(newFormData);
    }

    const handleSelectValueChange = (event) => {
        const newFormData = {
            ...inputFields,
            developer: event.target.value,
        };
        setInputFields(newFormData);
    }

    const handleStartDate = (event) => {
        const newFormData = {
            ...inputFields,
            startDate: event.target.value,
        };
        setInputFields(newFormData);
    }

    const handleEndDate = (event) => {
        const newFormData = {
            ...inputFields,
            endDate: event.target.value,
        };
        setInputFields(newFormData);
    }
      
    function handleAddKeyDown (event){
        if(event.key === "Enter"){
            handleAddNewTask(event)
        }
    }

    function handleAddNewTask(e){
        e.preventDefault();

        // if(!inputFields) return

        addNewTaskRequest(inputFields)
        .then(res => {
            if(res.error){
                throw new Error ("Error!!!" )};
            dispatch(addNewTask(res.data));
            dispatch(setSuccessMessage('New task succesfully added!'))
            onClose()
        })
        .catch((error)=>{
            dispatch(setErrorMessage('Task did not added!'))
        })
    }  


    return(
        <div>
            <Modal 
                size="md"
                show = {true}
                onHide={onClose}            
            >
            
            <form 
                className="Form" 
                onKeyDown={handleAddKeyDown} 
                >
                <label htmlFor="title"><h4>Title</h4></label>
                <input 
                    className='formTitle'
                    type="text"
                    id="title"
                    value={inputFields.title}
                    placeholder="Task name..."
                    onChange={handleTitleValue} />
                            
                <label htmlFor="description"><h4>Description</h4></label>
                <input
                    className='description'
                    as="textarea"
                    id="description"
                    value={inputFields.description}
                    placeholder="Describe task..."
                    autoComplete="off"
                    onChange={handleDescriptionValue}
                /> 
                <label><h4>Choose importance </h4></label>
                <div className='importance'>
                    <div>
                        <label htmlFor="high"> High </label>
                        <input
                            id="high"
                            value="High"
                            name="importance"
                            type="radio"
                            checked={inputFields.importance === 'High'}
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
                            checked={inputFields.importance === 'Medium'}
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
                            checked={inputFields.importance === 'Low'}
                            onChange={handleRadioChange}
                        />
                    </div>
                </div>    
                
                <label ><h4>Choose duration</h4></label>
                <div className='date'>
                    <div>
                        <label htmlFor="startdate">Start Date</label>
                        <input
                            type="date"
                            id="startdate"
                            value={inputFields.startDate}
                            onChange={handleStartDate} />
                    </div>
                    <div>
                        <label htmlFor="enddate">End Date</label>
                        <input
                            type="date"
                            id="enddate"
                            value={inputFields.endDate}
                            onChange={handleEndDate} />
                    </div>
                </div>
            
                <label htmlFor="developers"><h4>Choose a developer:</h4></label>
                <select
                    name="developers"
                    value={inputFields.developer}
                    onChange={handleSelectValueChange}
                    className='developer'>
                    <option value=''>Developer</option>
                    <option value="Dolera">Dolera</option>
                    <option value="Aksana">Aksana</option>
                    <option value="Developer 3">Developer 3</option>
                    <option value="Developer 4">Developer 4</option>
                    <option value="Developer 5">Developer 5</option>
                </select>
                <div className='footerBtns'>
                    <button
                        onClick={handleAddNewTask} 
                        // disabled={props.disabledButton}
                        >Add Task
                    </button>
                    <button
                        onClick={onClose}
                        // disabled={props.disabledButton}
                        >Close</button>
                </div>
            </form>
            {/* </div> */}
        </Modal>
    </div>
    )
    
}

export default AddNewTask