import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';




// put your reducer here!
const speedReducer = (state={count: 0}, action) => {
    if (action.type === 'SPEED_INCREASE') {
        return {count: state.count + 1}
    } else if (action.type === 'SPEED_DECREASE') {
        return { count: state.count - 1 }
    }
        return state;
}

const passengerReducer = (state=[{name:''}], action) => {
    if (action.type === 'ADD_PASSENGER') {
        return [...state, {name: action.payload}]
    }
    return state;
}

// use reducer in store
const storeInstance = createStore(
    combineReducers({
        speedReducer,
        passengerReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
