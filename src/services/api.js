import axios from "axios";

export const api = axios.create({
  baseURL: 'https://goweather.herokuapp.com/weather/'
})