import { GSAP } from './api-client';

const apiClient = new GSAP('/actions');

async function getPrices(
  countryCode: string,
  currency: string,
  keyword: string
) {
  return await apiClient
    .post({
      data: JSON.stringify({
        countryCode,
        currency,
        keyword,
      }),
    })
    .then((r) => r);
}

export default getPrices;
