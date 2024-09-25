import axios from "axios";

// Swager: https://todo-caio.azurewebsites.net/swagger/index.html

const baseUrl = "https://todo-caio.azurewebsites.net/api/";

export const apiInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
});