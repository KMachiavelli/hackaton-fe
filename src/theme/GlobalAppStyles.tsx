import { GlobalStyles } from '@mui/material';

export const GlobalAppStyles = () => {
  return (
    <GlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
        },
        '#root': {},
        a: {
          textDecoration: 'none',
        },
      }}
    />
  );
};
