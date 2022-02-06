import React from "react";
import {useReducer} from "react";

import {Cats, Dogs, Form} from "./components";
import "./App.css";

const reducer = (state, action) => {

    switch (action.type) {

        case 'ADD_CAT':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]};
        case 'ADD_DOG':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]};
        case 'DEL_CAT':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)};
        case 'DEL_DOG':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
        default:
            return state;
    }
};

const App = () => {
    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <Form dispatch={dispatch}/>
            <div className={"wrap"}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;