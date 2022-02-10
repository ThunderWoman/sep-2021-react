import {useDispatch} from "react-redux";

import {carToUpdate} from "../../store/car.slice";

const Car = ({car}) => {
    const {id, model, year, price} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>{id}</div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
        </div>
    );
};

export {Car};