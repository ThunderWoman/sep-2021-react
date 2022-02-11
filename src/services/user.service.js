import {axiosService} from "./axios.service";

export const userService = {
    getAll: () => axiosService.get('https://jsonplaceholder.typicode.com/users').then(value => value.data)
};