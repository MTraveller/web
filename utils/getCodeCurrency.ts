import { Markets } from '@/entities/gsap';

const getCodeCurrency = (country: string) => {
  const result = Object.entries(Markets).find(
    (value) => value[0] === country
  )?.[1];

  return {
    countryCode: result?.countryCode,
    currency: result?.currency,
  };
};

export default getCodeCurrency;
