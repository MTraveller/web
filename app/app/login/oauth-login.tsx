'use client';

import { Button } from '@chakra-ui/react';
import { Provider } from '@supabase/supabase-js';
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { oAuthLogin } from './actions';

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: 'google',
      displayName: 'Google',
      icon: <FaGoogle />,
    },
    {
      name: 'apple',
      displayName: 'Apple',
      icon: <FaApple />,
    },
    {
      name: 'azure',
      displayName: 'MicroSoft',
      icon: <FaMicrosoft />,
    },
  ];

  const isProvider = (provider: OAuthProvider) =>
    ['apple', 'azure'].includes(provider.name);

  return (
    <>
      {oAuthProviders.map((provider) => (
        <Button
          key={provider.name}
          w='33%'
          variant='outline'
          size='lg'
          onClick={async () => await oAuthLogin(provider.name)}
          isDisabled={isProvider(provider)}
        >
          {provider.icon ?? provider.displayName}
        </Button>
      ))}
    </>
  );
}
