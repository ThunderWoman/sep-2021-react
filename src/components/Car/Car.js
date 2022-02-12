import React from "react";
import {useDispatch} from "react-redux";

import {deleteCarThunk, updateCarThunk} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>№ {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={() => dispatch(updateCarThunk({car}))}>Update</button>
        </div>
    );
};

export {Car};