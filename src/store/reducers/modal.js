import {
    DISPLAY_MODAL,
    HIDE_MODAL,
} from '../types';

const initialState = {
    displayModal: false,
    modalText: null
};

function modal(state = initialState, action){
    switch(action.type){
        case DISPLAY_MODAL : 
            return {
                ...state,
                displayModal: true,
                modalText: action.payload.text
            }
        case HIDE_MODAL : 
            return {
                ...state,
                displayModal: false,
                modalText: null
            }
        default :
            return {
                ...state
            }
    }
}

export default modal;