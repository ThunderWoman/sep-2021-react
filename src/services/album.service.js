import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const albumService = {
    getPhotosById: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
};