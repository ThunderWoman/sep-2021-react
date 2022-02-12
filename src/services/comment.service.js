import {jsonService} from "./json.service";
import {urlsJson} from "../configs";

export const commentService = {
    getAll: () => jsonService.get(urlsJson.comments).then(value => value.data)
};