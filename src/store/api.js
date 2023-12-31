import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// const BASE_URL = 'http://localhost:3004'

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:3004'
    }),
    tagTypes: ['Tasks'],

    endpoints: (builder) =>({
        getTasks: builder.query({
            query: () => '/tasks'
        }),

        addTask: builder.mutation({
            query: (payload) => ({
                url: `/tasks`,
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            // invalidatesTags: ['tasks']
        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',

            })
        }),

        editTask: builder.mutation({
            query: (payload)=> ({
                url: `/tasks/${payload.id}`,
                method: 'PUT',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),


    })
})


export const { useGetTasksQuery, 
                useAddTaskMutation, 
                useDeleteTaskMutation,
                useEditTaskMutation
            } = apiSlice