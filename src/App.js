import './App.css'

import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1};
        case 'dec':
            return {...state, count1: state.count1 - 1};
        case 'reset':
            return {...state, count1: action.payload};
        case 'inc2':
            return {...state, count2: state.count2 + 1};
        case 'dec2':
            return {...state, count2: state.count2 - 1};
        case 'reset2':
            return {...state, count2: action.payload};
        case 'inc3':
            return {...state, count3: state.count3 + 1};
        case 'dec3':
            return {...state, count3: state.count3 - 1};
        case 'reset3':
            return {...state, count3: action.payload};
    }
    return state;
};

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 1, count3: 2});

    return (
        <div>
            <div>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', payload: 0})}>RESET</button>
            </div>
            < div>
                < div> {state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 1})}>RESET</button>
            </div>
            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 2})}>RESET</button>
            </div>
        </div>
    )
        ;
};

export default App;