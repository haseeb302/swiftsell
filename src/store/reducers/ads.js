import { adTypes } from "../constants/types";

const initialState = {
    items: [],
};

export const items = (state = initialState, action) => {
    switch (action.type) {
        case adTypes.CREATE_AD:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}