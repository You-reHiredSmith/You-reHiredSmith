// action types
import * as appTypes from '../reducers/appReducers.js'

// export actions
export const addApplicationActionCreator = application => ({
  type: appTypes.ADD_APPLICATION,
  payload: application
})

export const deleteApplicationActionCreator = applicationId => ({
  type: appTypes.DELETE_APPLICATION,
  payload: applicationId
})
// export const addMarketActionCreator = marketId => ({
//   type: types.ADD_MARKET,
//   payload: marketId,
// });
// export const deleteCardActionCreator = marketId => ({
//   type: types.DELETE_CARD,
//   payload: marketId,
// });
// export const setNewLocationActionCreator = marketId => ({
//   type: types.SET_NEW_LOCATION,
//   payload: marketId,
// });
