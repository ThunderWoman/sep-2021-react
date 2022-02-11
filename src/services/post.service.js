import {axiosService} from "./axios.service";

export const postService = {
    getAll: () => axiosService.get('https://jsonplaceholder.typicode.com/posts').then(value => value.data)
};