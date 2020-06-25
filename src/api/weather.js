import axios from 'axios'


export const keyApi = 'YLfaZu6Cl5ORxcZGNKSgpi76GzUsrl2r'


export const axiosInstance = axios.create({
    baseURL: 'https://dataservice.accuweather.com/',
    // headers: { 'X-Custom-Header': 'foobar' },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
  });
