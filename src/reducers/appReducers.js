import * as actionTypes from './actiontype.js'

const initialState = {
  jobId: 4, 
  jobName: 'blah'
};


// function createReducer(initialState, handlers) {
//   return function reducer(state = initialState, action) {
//     if (handlers.hasOwnProperty(action.type)) {
//       return handlers[action.type](state, action)
//     } else {
//       return state;
//     }
//   }
// }


export default function appReducers(state = initialState, action) { 
  switch (action.type) {
    case action.type.ADD_JOB_ID: 
    default: return initialState 
      return {
        ...initialState, 
        jobId: action.payload
    }
  }

    
}