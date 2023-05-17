import axios from "axios";


const url = process.env.REACT_APP_BASE_URL;

const AoneService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});

AoneService.interceptors.request.use(
  config => {
    //hesders logic goes here
    return config;
  },
  error => Promise.reject(error)
);

export default AoneService;
