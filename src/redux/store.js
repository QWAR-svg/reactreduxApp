import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducers from './modules';

const configureStore = (reducers ={}, preLoadedState = {}, middleWares = [] ) => createStore(

    combineReducers({
        ...rootReducers,
        ...reducers
    }),
    preLoadedState,
    compose(
        applyMiddleware(
            ...middleWares,
            thunk,
            reduxLogger
        ), 

    )
);

export default configureStore;