// import {useState} from "react"
import Tasks from "../../components/Tasks/Tasks";
import AddNewTask from "../../components/AddNewTask/AddNewTask";
import EditTaskModal  from "../../components/EditTask/EditTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../store/taskReducer";
import { useEffect, useState} from "react";
import { useGetTasksQuery } from "../../store/api";
import './todo.css';
import { useNavigate } from "react-router-dom";


export default function ToDo(){

    const[showNewTaskModal, setShowNewTaskModal] = useState(false);
    const {data, isError, isLoading} = useGetTasksQuery();
    const taskData = useSelector((state) => state.taskReducer.toDoList);
    const editTaskData = useSelector((state) => state.taskReducer.editTask);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const { data, } = useGetTasksQuery();


    useEffect(() => {
        if (data) {
            dispatch(getAllTasks(data));
        }
    }, [data])

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/signin')
        }
    }, [])

    const toggleModal = () => {
        setShowNewTaskModal(!showNewTaskModal)
    }

    console.log('TTT===>>>', taskData);

    return(
        <div className="todopage">
            <div className="btnarea">
                <button     
                    onClick={() => toggleModal()}
                    className="addbtn">
                    Add New Task
                </button>
            </div>
            <div>
                {showNewTaskModal && 
                    <AddNewTask
                        onClose = {toggleModal}                           
                    />
                }
            </div>
            <div className="display">
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