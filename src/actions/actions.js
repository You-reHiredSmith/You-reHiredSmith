//action types
import * as actiontype from './actiontype.js'

//export actions
export const addJobIdCreator = jobId => ({
   type: types.ADD_JOB_Id,
   payload: jobId,
 });
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