import { useAppContext } from '../../../contexts/AppContext/AppContext';
import { Navbar } from '../Navbar/Navbar';
import { StyledBackground, StyledLayout, StyledMain } from './styles';

interface LayoutI {
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutI) => {
  const { themeMode } = useAppContext();
  return (
    <StyledLayout>
      <Navbar />
      <StyledMain themeMode={themeMode}>
        {children}
        <StyledBackground />
      </StyledMain>
      <footer />
    </StyledLayout>
  );
};
