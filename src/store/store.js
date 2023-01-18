import {configureStore} from '@reduxjs/toolkit'
import issueReducer from './issueSlice'
const store  = configureStore({
    reducer: {
        issue: issueReducer, 
    },
});
export default store;