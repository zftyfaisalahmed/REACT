import { createSlice } from '@reduxjs/toolkit'
import { createBlog, deleteBlogs, retriveBlogs, updateBlog } from '../Action/BlogAction'

// Initialize the state
const initialState = []

// Reducer Slices
const blogSlice = createSlice({
    name : "blog",
    initialState,
    //reducers : {},
    extraReducers : (builder) =>  {
        builder.addCase(createBlog.fulfilled,  (state , action) => {
            console.log('reducer played = ', action.payload)
            state.push(action.payload);
        })

        builder.addCase(retriveBlogs.fulfilled, (state , action) => {
            return [...action.payload]
        })

        builder.addCase(deleteBlogs.fulfilled,  (state , action) => {
            // console.log('reducer played = ', action.payload)
            let index = state.findIndex(({id}) => id === action.payload.id)
            state.splice(index, 1);
        })

        builder.addCase(updateBlog.fulfilled, (state , action) => {
            // console.log('reducer played = ', action.payload)
            const index = state.findIndex(blog => blog.id === action.payload.id)
            state[index] = {...state[index], ...action.payload}
        })
    }
})

const { reducer } = blogSlice

export default reducer