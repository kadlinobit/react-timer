import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import history from 'history/history';

import { 
    ADD_TIMER, 
    EDIT_TIMER, 
    START_TIMER, 
    STOP_TIMER,
    DELETE_TIMER,
    RESET_TIMER
} from 'actions/types';

export const addTimer = (timer) => {
    
    history.push('/');
    
    return {
        type: ADD_TIMER,
        payload: {
            id: uuidv4(),
            title: timer.title,
            description: timer.description,
            runningSince: null, 
            elapsed: 0
        }
    }
};

export const editTimer = (id, timer) => {

    history.push('/');

    return {
        type: EDIT_TIMER,
        payload: { id, ...timer }
    }
}

export const startTimer = (id) => {
    
    return (dispatch, getState) => {
       
        // Find any running timer and make it stop before starting new one
        const runningTimer = _.find(getState().timers, function(timer) { return timer.isRunning });
        if(runningTimer) {
            dispatch(stopTimer(runningTimer.id));
        }

        dispatch({
            type: START_TIMER,
            payload: id
        });

    }
}

export const resetTimer = (id) => {
    return {
        type: RESET_TIMER,
        payload: id
    }
}

export const stopTimer = (id) => {
    return {
        type: STOP_TIMER,
        payload: id
    }
}

export const deleteTimer = (id) => {
    
    history.push('/');
    
    return {
        type: DELETE_TIMER,
        payload: id
    }
}