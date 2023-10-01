/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface UserContextI {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  notifications: Array<string>;
  setNotifications: Dispatch<SetStateAction<Array<string>>>;
}

const UserContext = createContext({} as UserContextI);

export const UserContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [username, setUsername] = useState('');
  const [notifications, setNotifications] = useState<Array<string>>([]);

  return (
    <UserContext.Provider
      value={{ username, setUsername, notifications, setNotifications }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
