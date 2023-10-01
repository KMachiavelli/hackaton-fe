import { IconButton, Typography } from '@mui/material';
import {
  StyledLogoWrapper,
  StyledNavbar,
  StyledNoPaddingIconButton,
} from './styles';
import PetsIcon from '@mui/icons-material/Pets';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useAppContext } from '../../../contexts/AppContext/AppContext';
import { THEMES } from '../../../contexts/AppContext/types';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routing/routes';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserContext } from '../../../contexts/UserContext/UserContext';
import { useUserService } from '../../../services/UserService/UserService';

export const Navbar = () => {
  const { setThemeMode, themeMode } = useAppContext();
  const { logOut } = useUserService();
  const { username, setUsername } = useUserContext();
  const navigate = useNavigate();

  const handleChangeTheme = () => {
    console.log(themeMode);
    setThemeMode((pt) => (pt === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  };

  const handleLogout = () => {
    logOut().finally(() => {
      setUsername('');
      localStorage.removeItem('token');
      navigate(`/${ROUTES.LOGIN}`);
    });
  };

  return (
    <StyledNavbar>
      <StyledLogoWrapper>
        <Link to={`/${ROUTES.HOME}`}>
          <IconButton>
            <PetsIcon />
          </IconButton>
        </Link>
        <Typography variant="h2">Wild City</Typography>
      </StyledLogoWrapper>
      <div>
        {username && (
          <StyledNoPaddingIconButton onClick={handleLogout}>
            <LogoutIcon />
          </StyledNoPaddingIconButton>
        )}
        <StyledNoPaddingIconButton onClick={handleChangeTheme}>
          <Brightness4Icon />
        </StyledNoPaddingIconButton>
      </div>
    </StyledNavbar>
  );
};
