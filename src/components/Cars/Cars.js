import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllCars} from "../../store/car.slice";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <div>
            {error && <h1>{JSON.stringify(error)}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};