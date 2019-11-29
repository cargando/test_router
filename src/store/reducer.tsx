import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as actions from './actions';

const initialState = {
    text: "text",
    cnt: 0,
};

export const rootReducer = createReducer({
    [actions.incCnt.toString()]: (state: any, payload: any) => ({ ...state, cnt: payload}),
    [actions.decCnt.toString()]: (state: any, payload: any) => ({ ...state, cnt: payload}),
    [actions.changeText.toString()]: (state: any, payload: any) => ({ ...state, text: payload}),
}, initialState);

export const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
});
