import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    toDoList : [],
    editTask : null,

}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getAllTasks(state, action){
            state.toDoList = action.payload
        },

        addNewTask(state, action){
            state.toDoList = [
                state.toDoList,
                action.payload
            ]
        },

        removeSingleTask(state, action){
            state.toDoList = [
                ...state.toDoList.filter((task)=> task.id !== action.payload.id )
            ]
        },

        editingTask(state, action){
            state.editTask = action.payload
        },

        putEditedTaskOnList(state, action) {
            let index = state.toDoList.findIndex((item) => item.id === action.payload.data.id);
            state.toDoList[index] = action.payload.data;
        },
    }
})

export const {
            getAllTasks, 
            addNewTask, 
            removeSingleTask,
            editingTask,
            putEditedTaskOnList,

            } = taskSlice.actions
            
export default taskSlice.reducer
