import * as actionTypes from './actionTypes';

export const toggleClass = (toggleSearch) => {
    return {
        type: actionTypes.TOGGLE_CLASS,
        searchStatus: toggleSearch
    }
}