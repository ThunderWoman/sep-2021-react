import axios from "axios";

import baseURL from "../configs/urls.json";

export const jsonService = axios.create({baseURL});