import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import reducers from './redux/reducers/index.js'


const reducer = combineReducers({
    reducers


    
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;