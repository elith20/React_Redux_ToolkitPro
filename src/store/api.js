import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// const BASE_URL = 'http://localhost:3004'

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:3004'
    }),

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
        })
    })
})


export const { useGetTasksQuery, useAddTaskMutation} = apiSlice