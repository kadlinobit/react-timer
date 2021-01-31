import { 
    ADD_TIMER, 
    EDIT_TIMER, 
    START_TIMER, 
    STOP_TIMER,
    DELETE_TIMER,
    RESET_TIMER
} from 'actions/types';

import timersReducer from 'reducers/timersReducer';

const defaultState = {
    1: {
        id: 1,
        title: 'New Timer',
        description: 'You can have a description as well',
        isRunning: false,
        runningSince: null, 
        elapsed: 0
    }
};

it('handles adding a new timer', () => {
    const action = {
        type: ADD_TIMER,
        payload: {
            id: 1,
            title: 'title',
            runningSince: null, 
            elapsed: 0
        }
    };

    const newState = timersReducer({}, action);
    expect(newState).toEqual({
        [action.payload.id] : action.payload
    });
});

it('handles editing title and description of a timer', () => {
    const action = {
        type: EDIT_TIMER,
        payload: {
            id: 1,
            title: 'New Title',
            description: 'New Description'
        }
    };

    const newState = timersReducer(defaultState, action);
    expect(newState).toEqual({
        1: {
            id: 1,
            title: 'New Title',
            description: 'New Description',
            isRunning: false,
            runningSince: null, 
            elapsed: 0
        }
    })
});

it('handles starting a timer', () => {
    const momentBeforeAction = Date.now();
    
    const action = { type: START_TIMER, payload: 1 };
    const newState = timersReducer(defaultState, action);

    expect(newState[1].runningSince).toBeGreaterThanOrEqual(momentBeforeAction);
    expect(newState[1].isRunning).toEqual(true);
});

it('handles stopping a timer', () => {
    
    const action = { type: STOP_TIMER, payload: 1 };
    const newState = timersReducer({
        1: {
            id: 1,
            title: 'Timer1',
            isRunning: true,
            runningSince: Date.now() - 3600000, 
            elapsed: 0
        }
    }, action);

    expect(newState[1].isRunning).toEqual(false);
    expect(newState[1].runningSince).toEqual(null);
    expect(newState[1].elapsed).not.toEqual(0);
});

it('handles deleting a timer', () => {
    const action = { type: DELETE_TIMER, payload: 1 };
    const newState = timersReducer(defaultState, action);

    expect(newState).toEqual({});
});

it('handles reseting a timer', () => {
    const action = { type: RESET_TIMER, payload: 1 };
    const newState = timersReducer({
        1: {
            id: 1,
            title: 'Timer1',
            isRunning: false,
            runningSince: null, 
            elapsed: 999999            
        }
    }, action);

    expect(newState[1].elapsed).toEqual(0);
});