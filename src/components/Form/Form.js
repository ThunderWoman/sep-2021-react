import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {addCar, updateCar} from "../../store";

const Form = () => {
    const {carForUpdate: id} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();
    const {handleSubmit, reset, register} = useForm();

    const submit = (data) => {
        if (id) {
            dispatch(updateCar({id, data}));
        }
        dispatch(addCar({data}));
        reset();
    };

    return (
        <div>
        <form onSubmit={handleSubmit(submit)}>
            <label>   Model : <input type="text" placeholder={'model'} {...register('model')}/></label>
            <label>   Price : <input type="text" placeholder={'price'} {...register('price')}/></label>
            <label>   Year :  <input type="text" placeholder={'year'} {...register('year')}/></label>
            <button>{id ? 'Update' : 'Create'}</button>
        </form>
        </div>
    )
};

export {Form};