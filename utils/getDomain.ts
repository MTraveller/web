const env = process.env.NODE_ENV as 'development' | 'production';

const domain = {
  development: 'http://app.localhost:3000',
  production: 'https://app.ecominmotion.com',
};

export function getDomain() {
  return { domain: domain[env] };
}

export default getDomain;
