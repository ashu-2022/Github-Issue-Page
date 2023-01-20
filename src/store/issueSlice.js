import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  issues: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchIssues = createAsyncThunk('issue/fetchIssues', (pageNo) => {
  return axios
    .get(`https://api.github.com/repos/facebook/react/issues?page=${pageNo}`)
    .then(response => response.data)
})

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchIssues.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.loading = false
      // state.issues = [...state.issues, ...action.payload]
      state.issues = [...new Map([...state.issues, ...action.payload].map(item => [item['id'], item])).values()];
      state.error = ''
    })
    builder.addCase(fetchIssues.rejected, (state, action) => {
      state.loading = false
      state.issues = [...state.issues]
      state.error = action.error.message
    })
  }
})

export default issueSlice.reducer



