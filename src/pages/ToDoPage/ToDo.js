// import {useState} from "react"
import Tasks from "../../components/Tasks/Tasks";
import AddNewTask from "../../components/AddNewTask/AddNewTask";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../store/taskReducer";
import { useEffect } from "react";
import { useGetTasksQuery } from "../../store/api";


export default function ToDo(){
    const taskData = useSelector((state) => state.taskReducer.toDoList);
    const dispatch = useDispatch();
    const { data, } = useGetTasksQuery();

    useEffect(() => {
        if (data) {
            dispatch(getAllTasks(data));
        }
    }, [data])

    return(
        <div>
            <AddNewTask/>
            <div>
                {taskData.length && taskData.map((item) => {
                    return (
                        <div key={item.id}>
                        
                            <Tasks
                                item={item}
                                // handleCheckedTasks={handleCheckedTasks}
                                // handleRemoveSingleTask={handleRemoveSingleTask}
                                // disabledButton={checkedTasks.size}
                                // handleEditTask={()=> handleEditTask(item)}
                            />

                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}