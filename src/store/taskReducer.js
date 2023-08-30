import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    toDoList : [],
    editTask : null,
    successMessage: null,
    errorMessage: null,
    editedMessage: null,

}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getAllTasks(state, action){
            state.toDoList = [...action.payload]
        },

        addNewTask(state, action){
            state.toDoList = [
                action.payload,
                ...state.toDoList
            ]
        },

        removeSingleTask(state, action){
            state.toDoList =
                [...state.toDoList].filter((task)=> action.payload.id !== task.id )
            
        },

        editingTask(state, action){
            state.editTask = action.payload
        },

        putEditedTaskOnList(state, action) {
            let index = state.toDoList.findIndex((item) => item.id === action.payload.data.id);
            state.toDoList[index] = action.payload.data;
        },

        setSuccessMessage(state, action){
            state.successMessage = action.payload
        },

        setErrorMessage(state, action){
            state.errorMessage = action.payload
        },
        
        setEditedMessage(state, action){
            state.editedMessage = action.payload
        },
    }
})

export const {
                getAllTasks, 
                addNewTask, 
                removeSingleTask,
                editingTask,
                putEditedTaskOnList,
                setEditedMessage,
                setSuccessMessage, 
                setErrorMessage

            } = taskSlice.actions
            
export default taskSlice.reducer
