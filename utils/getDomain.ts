import { hostname } from 'os';

const env = process.env.NODE_ENV as 'development' | 'production';

const domain = {
  development: {
    hostname: 'localhost',
    host: 'localhost:3000',
    app: 'http://app.localhost:3000',
    www: 'http://www.localhost:3000',
  },
  production: {
    hostname: 'ecominmotion',
    host: 'ecominmotion.com',
    app: 'https://app.ecominmotion.com',
    www: 'https://www.ecominmotion.com',
  },
};

export function getDomain() {
  return { domain: domain[env] };
}

export default getDomain;
