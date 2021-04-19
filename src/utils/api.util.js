import axios from 'axios';

axios.interceptors.request.use(function (config) {
  config.headers = {
    'content-type': 'application/json'
  };
  return config;
});

const apiBaseURL = 'http://localhost:3001';

class API {
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response.error.toJSON();
    throw error;
  }

  sendRequest(options) {
    options.url = options.path;
    options.baseURL = apiBaseURL;
    return axios.request(options);
  }
}

export default new API();
