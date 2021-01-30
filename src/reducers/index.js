import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import timersReducer from 'reducers/timersReducer';
import modalReducer from 'reducers/modalReducer';

export default combineReducers ({
    timers: timersReducer,
    modal: modalReducer,
    form: formReducer
});