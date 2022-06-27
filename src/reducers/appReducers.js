import { createSlice } from '@reduxjs/toolkit'

// function createReducer(initialState, handlers) {
//   return function reducer(state = initialState, action) {
//     if (handlers.hasOwnProperty(action.type)) {
//       return handlers[action.type](state, action)
//     } else {
//       return state;
//     }
//   }
// }

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    jobId: 4,
    jobName: 'blah',
    name: 'Griffin'
  },
  reducers: {
    ADD_JOB_ID: (state, action) => {
      state.jobId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase((state, action) => state)
  }
})

export const { ADD_JOB_ID } = appSlice.actions

export default appSlice.reducer
