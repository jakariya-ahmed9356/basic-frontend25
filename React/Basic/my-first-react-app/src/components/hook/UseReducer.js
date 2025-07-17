/**
 * const[state, dispatch] = useReducer(reducerFunction,initialState);
 * dispatch => a function to send actions
 * reducerFunction => Function that takes state and action, return New State
 * initialStat => the starting state
 */

import { useReducer } from "react";

const initialState = {count: 0};


function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
}


function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="text-center my-5">
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>+</button>
            <h1>{state.count}</h1>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>-</button> <br/>
            <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
        </div>
    );
}


export {
    Counter
}