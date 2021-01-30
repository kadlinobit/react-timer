import { 
    INIT_DELETE,
    INIT_ADD,
    INIT_EDIT,
    CANCEL_MODAL
} from 'actions/types';

const defaultState = {
    open: false,
    id: null, 
    operation: null
};

const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        
        case INIT_DELETE: {
            console.log('init delete');
            return { 
                open: true,
                id: action.payload,
                operation: 'delete'
            };
        }

        case INIT_EDIT: {
            console.log('init edit');
            return { 
                open: true,
                id: action.payload,
                operation: 'edit'
            };
        }

        case INIT_ADD: {
            console.log('init add');
            return { 
                open: true,
                id: null,
                operation: 'add'
            };
        }

        case CANCEL_MODAL: {
            console.log('cancel modal');
            return { 
                open: false,
                id: null,
                operation: null
            };           
        }

        default: {
            return state;
        }
    }
}

export default modalReducer;