import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalAppStyles } from './GlobalAppStyles';
import { useEffect, useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext/AppContext';
import { THEMES } from '../contexts/AppContext/types';

interface AppThemeProviderI {
  children: React.ReactElement;
}

export const AppThemeProvider = ({ children }: AppThemeProviderI) => {
  const { themeMode } = useAppContext();

  useEffect(() => {
    console.log(themeMode);
  }, [themeMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
        typography: {
          body1: {
            color: themeMode !== THEMES.DARK ? 'black' : 'white',
          },
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalAppStyles />
      {children}
    </ThemeProvider>
  );
};
