import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {addCar, updateCarThunk} from "../../store";
import store from "../../store/store";

const Form = () => {
    const {handleSubmit, reset, register} = useForm();

    const {carForUpdate: id} = useSelector(store => store['carReducer']);
    const dispatch = useDispatch();

    const submit = (data) => {
        if (id) {
            dispatch(updateCarThunk({id, data}));
        }
        dispatch(addCar({data}));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label> Model : <input type="text" {...register('model')}/></label>
                <label> Price : <input type="text" {...register('price')}/></label>
                <label> Year : <input type="text" {...register('year')}/></label>
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {Form};