import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducers here!
const speedReducer=(state = 0, action)=>{
  if(action.type==="MORE_POWER"){
    return state + 1
  }
  if(action.type==="LESS_POWER"){
    return state -1
  }
  return state
}
const passengerReducer=(state =[], action)=>{

  if(action.type === "ADD_PASSENGER"){
    return[...state, action.payload]
  }
return state
}
// be sure to combine your reducers!
const storeInstance = createStore(
  combineReducers({ //Need the combine if I call it the way I usually do.
 speedReducer,
 passengerReducer
  }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
