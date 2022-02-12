import {jsonService} from "./json.service";
import {urlsJson} from "../configs";

export const postService = {
    getAll: () => jsonService.get(urlsJson.posts).then(value => value.data)
};