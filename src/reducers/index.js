import { combineReducers } from 'redux';
import appReducers from './appReducers';


const reducers = combineReducers({

  applications: appReducers,
  
});

export default reducers;