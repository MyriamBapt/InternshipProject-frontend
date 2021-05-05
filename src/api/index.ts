import axios from 'axios';

const baseURL = `http://b83de012ad56.ngrok.io`;

const makeRequest = axios.create({
  baseURL
});

export default makeRequest;
