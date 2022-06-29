import { configureStore } from '@reduxjs/toolkit'

import appReducer from './reducers/appReducers'

// check this
// https://redux-toolkit.js.org/usage/usage-guide/

const store = configureStore({
  reducer: {
    app: appReducer
  }
})

export default store
