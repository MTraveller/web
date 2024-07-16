const env = process.env.NODE_ENV as 'development' | 'production';

const domain = {
  development: {
    app: 'http://app.localhost:3000',
    www: 'http://www.localhost:3000',
  },
  production: {
    app: 'https://app.ecominmotion.com',
    www: 'https://www.ecominmotion.com',
  },
};

export function getDomain() {
  return { domain: domain[env] };
}

export default getDomain;
