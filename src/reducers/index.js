import { combineReducers } from 'redux';
import roundsReducer from './roundsReducer';

export default combineReducers({
  rounds: roundsReducer,
});
