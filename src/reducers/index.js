import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import timersReducer from 'reducers/timersReducer';

export default combineReducers ({
    timers: timersReducer,
    form: formReducer
});