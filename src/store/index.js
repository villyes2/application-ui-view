import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import apiMiddleware from "../middleware/api";
const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(apiMiddleware, thunkMiddleware,
        loggerMiddleware));
window.store = store;
export default store;


