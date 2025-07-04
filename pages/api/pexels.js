import axios from 'axios';

const pexelsApi = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: process.env.PEXELS