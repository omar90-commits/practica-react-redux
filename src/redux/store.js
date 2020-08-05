import { createStore, combineReducers } from 'redux';
import resultsReducer from './reducers/resultsReducer';
import detailsReducer from './reducers/detailsReducer';

const reducer = combineReducers({
    resultsReducer,
    detailsReducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;