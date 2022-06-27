import { createSlice } from '@reduxjs/toolkit'

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
    ADD_APPLICATION: (state, action) => {
      state.applications.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase((state, action) => state)
  }
})

export const { ADD_APPLICATION } = appSlice.actions

export default appSlice.reducer
