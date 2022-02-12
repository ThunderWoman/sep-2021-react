import {jsonService} from "./json.service";
import {urlsJson} from "../configs";

export const userService = {
    getAll: () => jsonService.get(urlsJson.users).then(value => value.data)
};