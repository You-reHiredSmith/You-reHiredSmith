import { createSlice } from '@reduxjs/toolkit'

// getting the applications from the database
async function getApplications () {
  const json = await fetch('/api/users/applications/4')
  const data = await json.json()
  return data
}

// looks like they were setting the stage to have multiple users..
// if you follow this all the way to the apiController getUserId they've hard coded the user id of 1 right now
async function getUser () {
  const json = await fetch('/api/users/4')
  const data = await json.json()
  return data
}

// the initial state is dependent upon a succesful fetch request here,
// which isn't very optimal because if the request fails then nothing will render on the screen.
// it would probably be better to set the initial state to some default values like empty strings
// then the ui will display no matter what
// and if there's an issue with a request when submitting inputs that can be handled then by telling the user to re try
const initialState = {
  user: await getUser(),
  applications: await getApplications()
  // user: 1,
  // applications: []
}

// A function that accepts an initial state, an object of reducer functions, and a "slice name", (in this case the name is app.
// refer to Homepage.jsx, line 14 to see it)
// and automatically generates action creators and action types that correspond to the reducers and state.
// here's the docs https://redux-toolkit.js.org/api/createSlice
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // this is the action being dispactched on line 48 of AddApplications.jsx. The payload is the body
    ADD_APPLICATION: (state, action) => {
      // as Moonhee said, you can directly update state with redux toolkit and you don't have to worry about screating deep copies and all that nonesense.
      // this next bit is from the docs.. keep in mind that createSlice, which is the function we're in right now, uses createReducer internaly.

      // createReducer utility has some special "magic" that makes it even better.
      // It uses the Immer library internally, which lets you write code that "mutates" some data, but actually applies the updates immutably.
      // This makes it effectively impossible to accidentally mutate state in a reducer
      // https://redux-toolkit.js.org/usage/usage-guide/   go to writing reducers
      state.applications.push(action.payload)
    },
    DELETE_APPLICATION: (state, action) => {
      // app is being located by id using the payload from line 28 of row.jsx.
      // then it's being removed using splice
      for (let i = 0; i < state.applications.length; i++) {
        if (state.applications[i].application_id === action.payload) {
          state.applications.splice(i, 1)
        }
      }
    }
  },
  // it looks like maybe they were setting up to build an initial state with some default values here maybe.. Not exactly sure
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => state)
  }
})

// deconstructing and exporting each reducer. These are then imported into actions.js and exported from there to be used in the components.
export const { ADD_APPLICATION, DELETE_APPLICATION } = appSlice.actions

export default appSlice.reducer
