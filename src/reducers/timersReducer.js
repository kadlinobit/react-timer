import _ from 'lodash';
import { 
    ADD_TIMER, 
    EDIT_TIMER, 
    START_TIMER, 
    STOP_TIMER,
    DELETE_TIMER,
    RESET_TIMER
} from 'actions/types';

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

const timersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TIMER: {
            return {...state, [action.payload.id] : action.payload };
        }

        case START_TIMER: {
            const timer = { ...state[action.payload]};
            
            timer.isRunning = true;
            timer.runningSince = Date.now();

            return { ...state, [action.payload] : timer };
        }

        case RESET_TIMER: {
            const timer = { ...state[action.payload]};
            
            timer.elapsed = 0;

            if(timer.isRunning)
                timer.runningSince = Date.now();
            else 
                timer.runningSince = null;

            return { ...state, [action.payload] : timer };            
        }

        case STOP_TIMER: {
            const timer = { ...state[action.payload]};
            const prevElapsed = Date.now() - timer.runningSince;

                timer.isRunning = false;
                timer.elapsed = timer.elapsed + prevElapsed;
                timer.runningSince = null;

            return { ...state, [action.payload] : timer };       
        }

        case DELETE_TIMER: {
            return _.omit(state, action.payload);
        }

        case EDIT_TIMER: {
            const timer = { ...state[action.payload.id]};
            timer.title = action.payload.title;
            timer.description= action.payload.description;

            return { ...state, [action.payload.id]: timer  }
        }
        
        default:
            return state;
    }
}

export default timersReducer;