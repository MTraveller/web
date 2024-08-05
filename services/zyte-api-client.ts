import axios, { AxiosRequestConfig } from 'axios';
import { Auth } from '@/entities/zyte';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const zyte = axios.create({
  baseURL: 'https://api.zyte.com',
  auth: { username: process.env.ZYTE_API, password: '' } as Auth,
});

class APIClient {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
}

export class Zyte extends APIClient {
  post = (config: AxiosRequestConfig) => {
    return zyte.post(this.endpoint, config).then((res) => res.data);
  };
}
