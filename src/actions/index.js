import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import { 
    ADD_TIMER, 
    EDIT_TIMER, 
    START_TIMER, 
    STOP_TIMER,
    DELETE_TIMER,
    RESET_TIMER,
    INIT_DELETE,
    INIT_EDIT,
    INIT_ADD,
    CANCEL_MODAL
} from 'actions/types';

export const addTimer = (timer) => {
    
    return (dispatch) => {
        
        dispatch({ type: CANCEL_MODAL });
    
        dispatch ({
            type: ADD_TIMER,
            payload: {
                id: uuidv4(),
                title: timer.title,
                description: timer.description,
                runningSince: null, 
                elapsed: 0
            }
        });   
    }
};

export const editTimer = (id, timer) => {

    return (dispatch) => {
        
        dispatch({ type: CANCEL_MODAL });

        dispatch ({
            type: EDIT_TIMER,
            payload: { id, ...timer }
        });
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
    
    return (dispatch) => {
        
        dispatch({ type: CANCEL_MODAL });
        
        dispatch ({
            type: DELETE_TIMER,
            payload: id
        });
    }
}

/////////// MODAL ACTIONS //////////////

export const initDelete = (id) => {
    return {
        type: INIT_DELETE,
        payload: id
    }
}

export const initEdit = (id) => {
    return {
        type: INIT_EDIT,
        payload: id
    }
}

export const initAdd = () => {
    return {
        type: INIT_ADD
    }
}

export const cancelModal = () => {
    return {
        type: CANCEL_MODAL
    }
}