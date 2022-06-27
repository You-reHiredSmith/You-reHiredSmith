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
async function getApplications () {
  const json = await fetch('/api/users/applications/1')
  const data = await json.json()
  return data
}

async function getUser () {
  const json = await fetch('/api/users/1')
  const data = await json.json()
  return data
}

const initialState = {
  user: await getUser(),
  applications: await getApplications()
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
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
