import {createAsyncThunk} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            return await carService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar(newCar));
        } catch (e) {
        }
    });

export const deleteCarThunk = createAsyncThunk(
    'deleteCar/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
        }
    });

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCar',
    async ({id: {id}, car}, {dispatch}) => {
            const newCar = await carService.updateById(id, car);
            dispatch(updateCar({car:newCar}));
            return {car: newCar};
    });

const initialState = {
    cars: [],
    status: null,
    error: null,
    carForUpdate: null
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,

    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.car.id);
        },
        updateCar: (state, action) => {
            state.carForUpdate = action.payload.car;
        }
    },

    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});

const carReducer = carSlice.reducer;
export const {addCar, deleteCar, updateCar} = carSlice.actions;

export default carReducer;