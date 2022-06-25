import { configureStore } from '@reduxjs/toolkit'
import appReducers from './reducers/appReducers'

const store = configureStore({
  reducers: appReducers
})








export default store