// create an axios instance for github api

import axios from 'axios';

const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export default githubAxios;
