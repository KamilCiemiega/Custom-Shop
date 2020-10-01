import * as actionTypes from '../actions/actionTypes';

const innitialState = {
    searchToggleStatus: true
}

const reducer = ( state = innitialState, action ) => {
    switch(action.type){
        case actionTypes.TOGGLE_CLASS:
            return {
                ...state,
                searchToggleStatus:action.searchStatus
            }
            default:
                return state;
    }


}

export default reducer