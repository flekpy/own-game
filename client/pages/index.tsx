import type { NextPage } from 'next';
import { NavigationContainer } from '../components/NavigationContainer/Navigation';
import { useTypedSelector } from '../hooks/useTypedSelector';
import User from './users/user';

const Home: NextPage = () => {
  const { login } = useTypedSelector((state) => state.user.userData);

  return <NavigationContainer>
    {login && (<User />)}
  </NavigationContainer>;
};

export default Home;
