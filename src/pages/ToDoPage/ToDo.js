// import {useState} from "react"
import Tasks from "../../components/Tasks/Tasks";
import AddNewTask from "../../components/AddNewTask/AddNewTask";
import EditTaskModal  from "../../components/EditTask/EditTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../store/taskReducer";
import { useEffect, useState} from "react";
import { useGetTasksQuery } from "../../store/api";


export default function ToDo(){

    const[showNewTaskModal, setShowNewTaskModal] = useState(false);
    const taskData = useSelector((state) => state.taskReducer.toDoList);
    const editTaskData = useSelector((state) => state.taskReducer.editTask);
    const dispatch = useDispatch();
    const { data, } = useGetTasksQuery();


    useEffect(() => {
        if (data) {
            dispatch(getAllTasks(data));
        }
    }, [data])

    const toggleModal = () => {
        setShowNewTaskModal(!showNewTaskModal)
    }

    return(
        <div >
            <button     
                onClick={() => toggleModal()}
                style={{width: '200px', height: '50px', marginLeft: '45%', backgroundColor: '#daec8a', borderRadius: '5px', border: '2px solid #3D9A8B'}}>
                Add New Task
            </button>
            <div>
            {showNewTaskModal && 
                <AddNewTask
                    onClose = {toggleModal}                           
                />}
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {taskData?.map((task) => {
                    return (
                        <div key={task.id}>
                            <Tasks
                                item={task}
                            />
                        </div>
                        )
                    })
                }
            </div>
            <div>
                {!! editTaskData && <EditTaskModal />}
            </div>
        </div>
    )
}