import axios from "axios";

const baseUrl = "https://todo-caio.azurewebsites.net/api/";

export const apiInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
});