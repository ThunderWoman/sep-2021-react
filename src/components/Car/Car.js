import React from "react";
import {useDispatch} from "react-redux";

import {deleteCar, updateCar} from "../../store";

const Car = ({car}) => {
    const {id, model, year, price} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>№ {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
            <button onClick={() => dispatch(updateCar({car}))}>Update</button>
        </div>
    );
};

export {Car};