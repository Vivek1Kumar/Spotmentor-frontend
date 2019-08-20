import { combineReducers } from 'redux';
import classRoomReducer from './classRoomReducer';

export default combineReducers({
    markAverage: classRoomReducer
});