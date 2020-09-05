import { createAction } from 'redux-actions';

export const constants = {
    CLEAR_ALL: 'clear-all',
    SET_LIST_USERS: 'set-list-users',
    CHANGE_LOGIN_NAME: 'change-login-name',
    LOAD_USERS: 'load-users',
    USERS_LOADED: 'users-loaded',
    USERS_LOADING_ERROR: 'users-loading-error',
    SET_TOTAL_USERS: 'set-total-users'
}

const actions = {
    CLEAR_ALL: createAction(constants.CLEAR_ALL),
    SET_LIST_USERS: createAction(constants.SET_LIST_USERS),
    CHANGE_LOGIN_NAME: createAction(constants.CHANGE_LOGIN_NAME),
    LOAD_USERS: createAction(constants.LOAD_USERS),
    USERS_LOADING_ERROR: createAction(constants.USERS_LOADING_ERROR),
    USERS_LOADED: createAction(constants.USERS_LOADED),
    SET_TOTAL_USERS: createAction(constants.SET_TOTAL_USERS),
}

export default actions;