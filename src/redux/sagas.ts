import { 
    all, select, 
    put, call, takeLatest
} from 'redux-saga/effects'
import actions from './actions';
import request from './../utils/request';
import { IState } from './types';
import { PER_PAGE } from '../utils/constants';

function* startGetUsers({ payload }: { payload: any }) {
    try {
        const loginName = yield select((state: IState) => state.loginName);
        const requestURL = `https://api.github.com/search/users?q=${loginName}+in:name+type:user`;
        const result = yield call(request, requestURL, {
            params: {
                per_page: PER_PAGE,
                page: 1,
                ...payload
            }
        });
        yield put(actions.USERS_LOADED(result.items));
        yield put(actions.SET_TOTAL_USERS(result.total_count));
    } catch (error) {
        yield put(actions.USERS_LOADING_ERROR(error));
    }
}


function* watchStartGetUsers() {
    yield takeLatest(actions.LOAD_USERS, startGetUsers)
}

export default function * rootSaga () {
    yield all([
        watchStartGetUsers()
    ])
}
  