import { ButtonLink } from '@/app/components/ButtonLink';
import Loader from '@/app/components/Loader';
import { Button } from '@chakra-ui/react';
import Logout from '../../Logout';

const AppButton = ({
  domain: { path, env, hostname },
  user,
  loading,
}: {
  domain: { path: string; env: string; hostname: string };
  user: string | null | undefined;
  loading: boolean;
}) => {
  if (path === '/login') return null;

  if (user)
    return path === '/account' ? (
      <Logout />
    ) : (
      <ButtonLink label='Account' path='/account' />
    );

  if (user === undefined)
    return (
      <Button width='100px' height='40px'>
        <Loader />
      </Button>
    );

  return (
    !loading &&
    !user &&
    path !== '/account' && (
      <ButtonLink
        label='Log in'
        path={`${env === 'dev' ? 'http' : 'https'}://app.${hostname}/login`}
      />
    )
  );
};

export default AppButton;
