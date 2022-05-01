import axios from 'axios';

const api = axios.create({
  // baseURL: "https://listcontact.azurewebsites.net",
  baseURL: "http://localhost:5030"
});

export default api;