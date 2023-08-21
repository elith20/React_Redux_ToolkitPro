import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    toDoList : [],

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
                ...state.toToList,
                action.payload
            ]

        }
    }
})

export const {getAllTasks, addNewTask} = taskSlice.actions
export default taskSlice.reducer
