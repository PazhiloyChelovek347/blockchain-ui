import BasicActionTypes from "../actions/BasicActionTypes";

export const signin = (data) => {
    return {
        type: BasicActionTypes.SIGNIN,
        address: data.address,
        role: data.role,
    }
};

export const signup = (role, address) => {
    return {
        type: BasicActionTypes.SIGNUP,
        address,
        role,
    }
};