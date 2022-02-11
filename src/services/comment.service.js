import {axiosService} from "./axios.service";

export const commentService = {
    getAll: () => axiosService.get('https://jsonplaceholder.typicode.com/comments').then(value => value.data)
};