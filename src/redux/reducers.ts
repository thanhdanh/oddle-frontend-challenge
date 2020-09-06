import { handleActions } from 'redux-actions';
import { constants } from './actions';
import { IUser, IState } from './types';

export const defaultState: IState = {
    fecthTimeout: 30000,
    users: [],
    loginName: '',
    loading: false,
    totalUsers: 0,
    currentUser: undefined,
}

const handlers: any = {
    [constants.CLEAR_ALL]: () => ({ ...defaultState }),
    [constants.LOAD_USERS]: (state: IState) => {
        return {
            ...state,
            loading: true,
        }
    },
    [constants.USERS_LOADED]: (state: IState, { payload } : { payload: [IUser] }): IState => {
        return {
            ...state,
            loading: false,
            users: payload
        }
    },
    [constants.CHANGE_LOGIN_NAME]: (state: IState, { payload } : { payload: string }): IState => {
        return {
            ...state,
            loginName: payload
        }
    },
    [constants.SET_TOTAL_USERS]: (state: IState, { payload } : { payload: number }): IState => {
        return {
            ...state,
            totalUsers: payload
        }
    },
    [constants.SET_CURRENT_USER]: (state: IState, { payload } : { payload: IUser }): IState => {
        return {
            ...state,
            currentUser: payload
        }
    },
}

export default handleActions(handlers, defaultState)
