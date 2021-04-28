import axios from 'axios';

const baseURL = `http://60a523a42780.ngrok.io`;

const makeRequest = axios.create({
  baseURL
});

export default makeRequest;
