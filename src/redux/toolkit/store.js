// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer';
import rootReducer from './reducer';

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
    reducer: rootReducer,
})
export default store;


