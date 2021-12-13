import BasicActionTypes from '../actions/BasicActionTypes';
const initialState = {
    role: 0,
    address: null,
};

export default function basicReducer(state = initialState, action) {
    switch(action.type) {
        case BasicActionTypes.SIGNUP:
            return { ...state, role: action.role, address: action.address };
        case BasicActionTypes.SIGNIN:
            return { ...state, role: action.role, address: action.address };
        default:
            return state;
    }
}