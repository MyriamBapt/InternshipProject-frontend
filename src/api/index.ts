import axios from 'axios';

const baseURL = `http://f830db028fcc.ngrok.io`;

const makeRequest = axios.create({
  baseURL
});

export default makeRequest;
