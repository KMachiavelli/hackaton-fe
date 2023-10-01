/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from 'react';
import { BASE_URL, ENDPOINTS, METHODS } from '../../xhr/config';
import { UserAuthBackTO, UserAuthTO } from '../types';

export interface UserServiceI {
  logIn: (body: UserAuthTO) => Promise<UserAuthBackTO>;
  logOut: () => Promise<Response>;
  auth: () => Promise<Response>;
}

export const UserServiceContext = createContext<UserServiceI>(
  {} as UserServiceI
);

export const useUsers = () => {
  const { POST } = METHODS;
  const { LOGIN, LOGOUT, AUTH } = ENDPOINTS;

  const logIn: UserServiceI['logIn'] = (body: UserAuthTO) => {
    return POST(`${BASE_URL}${LOGIN}`, body).then((res) => res.json());
  };
  const logOut: UserServiceI['logOut'] = () => {
    return POST(`${BASE_URL}${LOGOUT}`);
  };
  const auth: UserServiceI['auth'] = () => {
    return POST(`${BASE_URL}${AUTH}`);
  };

  return {
    logIn,
    logOut,
    auth,
  };
};

interface UserServiceProviderI {
  children: React.ReactElement;
}

export const UserServiceProvider = ({ children }: UserServiceProviderI) => {
  return (
    <UserServiceContext.Provider value={useUsers()}>
      {children}
    </UserServiceContext.Provider>
  );
};

export const useUserService = () => {
  return useContext(UserServiceContext);
};
