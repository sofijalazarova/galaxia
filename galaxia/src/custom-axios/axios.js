import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:8080/api',
    baseURL: 'https://galaxia-courses.azurewebsites.net/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, PUT, DELETE',
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default instance;