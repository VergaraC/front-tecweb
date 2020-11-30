import axios from "axios";

const current_URL = window.location.href;

export default axios.create({
   baseURL: process.env.REACT_APP_API_URL || "localhost:3333"
    //baseURL: process.env.REACT_APP_API_URL  
});
