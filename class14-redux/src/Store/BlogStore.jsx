import {configureStore} from '@reduxjs/toolkit'
import reducer from './../Reducer/BlogReducer';

const blogReducer = {
    blogs : reducer
}

const store = configureStore({
    reducer : blogReducer,
    devTools : true
});

export default store;