import axios from 'axios';

const Api = axios.create({
    url: "http://localhost:7000"
});

export const fetchdata = () => Api.get("/posts");
export const postfetch = (postData) => Api.post("/posts", postData);
export const postUser = (postuser) => Api.post("/signup", postuser);