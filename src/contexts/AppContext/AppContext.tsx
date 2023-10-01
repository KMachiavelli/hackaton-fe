/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { THEMES } from './types';

interface AppContextI {
  themeMode: THEMES;
  setThemeMode: Dispatch<SetStateAction<THEMES>>;
  //   App: CustomAppT
  //   setApp: React.Dispatch<React.SetStateAction<CustomAppT>>
}

const AppContext = createContext({} as AppContextI);

export const AppContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [themeMode, setThemeMode] = useState(THEMES.DARK);

  return (
    <AppContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
