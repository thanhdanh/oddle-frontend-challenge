import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers, { defaultState } from './reducers'
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export default function configureStore() {
    let composeEnhancers = compose;
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
          composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }

    const store: any = createStore(rootReducers, defaultState, composeEnhancers(...enhancers));
    sagaMiddleware.run(sagas);
    return store;
}
