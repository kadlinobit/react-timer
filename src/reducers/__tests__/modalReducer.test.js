import { 
    INIT_DELETE,
    INIT_ADD,
    INIT_EDIT,
    CANCEL_MODAL
} from 'actions/types';

import modalReducer from 'reducers/modalReducer';

const defaultState = {
    open: false,
    id: null, 
    operation: null
};

it('initiates delete confirmation modal', () => {
    const action = { type: INIT_DELETE, payload: 1 };
    const newState = modalReducer(defaultState, action);

    expect(newState).toEqual({
        open: true,
        id: 1,
        operation: 'delete'
    });
});

it('initiates add timer modal', () => {
    const action = { type: INIT_ADD };
    const newState = modalReducer(defaultState, action);

    expect(newState).toEqual({
        open: true,
        id: null,
        operation: 'add'
    });
});

it('initiates edit timer modal', () => {
    const action = { type: INIT_EDIT, payload: 1 };
    const newState = modalReducer(defaultState, action);

    expect(newState).toEqual({
        open: true,
        id: 1,
        operation: 'edit'
    });
});

it('closes modal or confirmation', () => {
    const action = { type: CANCEL_MODAL };
    const newState = modalReducer(defaultState, action);

    expect(newState).toEqual({
        open: false,
        id: null,
        operation: null
    });
});