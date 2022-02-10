import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {updateCarById} from "../../store/car.slice";

const Form = () => {
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const {handleSubmit, reset, setValue, register} = useForm();

    const submit = (data) => {
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue("model", carForUpdate.model);
            setValue("price", carForUpdate.price);
            setValue("year", carForUpdate.year);
        }
    }, [carForUpdate]);

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"model"} {...register("model")}/>
            <input type="text" placeholder={"price"} {...register("price")}/>
            <input type="text" placeholder={"year"} {...register("year")}/>
            <button>Update</button>
        </form>
    )
};

export {Form};