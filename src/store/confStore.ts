// eslint-disable-next-line
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from "redux-devtools-extension"
import { assignAll } from 'redux-act';
import * as actions from './actions';
import {createRootReducer} from './reducer';

export const history = createBrowserHistory();

const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history)/*, thunk*/))

export default function configureStore(preloadedState?: any) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        middleware
    );

    assignAll(actions, store);

    return store;
}