import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllCars} from "../../store";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <div>
            {status === 'pending' && <h2>Loading</h2>}
            {error && <h1>{error}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};