import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://app.localhost:3000/gs-average-price'
      : 'https://app.ecominmotion.com/gs-average-price',
});

class APIClient {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
}

export class GSAP extends APIClient {
  post = (config: AxiosRequestConfig) => {
    return instance
      .post(this.endpoint, config)
      .then((res) => JSON.parse(res.data));
  };
}
