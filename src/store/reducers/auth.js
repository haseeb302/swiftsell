import { authTypes } from "../constants/types";

const initialState = {
    user: null,
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.REGISTER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}