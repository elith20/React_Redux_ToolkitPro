import { addNewTask } from "../../store/taskReducer";
import { useAddTaskMutation } from "../../store/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './AddNewTask.css'
// import { Modal } from "react-bootstrap";
// import { Modal } from "bootstrap";


export const AddNewTask = ()=>{

    const [addNewTaskRequest, response] = useAddTaskMutation();
    const dispatch = useDispatch();
    const[inputFields, setInputFields] = useState({
        title: "",
        description: "",
        importance: "",
        startDate: "",
        endDate: "",
        developer: "",
    });

    
    const handleInputValue = (event) => {
        setInputFields({
            [event.target.name]: event.target.value
        })
        
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
            console.log(res)
            if(res.error){
                throw new Error ("some error" )
            }
            dispatch(addNewTask(res.data))

        })
    }

    


    return(
        // <Modal  
        // show={show}
        // onHide={handleOpenClose}
        // className="Modal" 
        // >
        <div className="Modal" >
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
                onChange={handleInputValue} />
                        
            <label htmlFor="description"><h4>Description</h4></label>
            <input
                className='description'
                as="textarea"
                id="description"
                value={inputFields.description}
                placeholder="Describe task..."
                autoComplete="off"
                onChange={handleInputValue}
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
                        value={inputFields.startdate}
                        onChange={handleStartDate} />
                </div>
                <div>
                    <label htmlFor="enddate">End Date</label>
                    <input
                        type="date"
                        id="enddate"
                        value={inputFields.enddate}
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
                    // onClick={handleOpenClose}
                    // disabled={props.disabledButton}
                    >Close</button>
            </div>
        </form>
        </div>
    // </Modal>
    )
    
}

export default AddNewTask