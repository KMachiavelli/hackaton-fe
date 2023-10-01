import { Button, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { StyledLogInForm } from './styles';
import { useUserService } from '../../../services/UserService/UserService';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES, SUB_ROUTES } from '../../../routing/routes';
import { useUserContext } from '../../../contexts/UserContext/UserContext';

export const LogInForm = () => {
  const { logIn, auth } = useUserService();
  const { setUsername } = useUserContext();
  const navigate = useNavigate();
  const [username, setInputUsername] = useState('');
  const [password, setInputPassword] = useState('');

  useEffect(() => {
    auth().then((res) => {
      if (res.ok) {
        navigate(`/${ROUTES.PANEL}/${SUB_ROUTES.PRESENT}`);
      }
    });
  }, []);

  const handleChangeUsername = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputUsername(target.value);
  };

  const handleChangePassword = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputPassword(target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    logIn({ username, password }).then(({ token, username }) => {
      if (token) {
        setUsername(username);
        localStorage.setItem('token', token);
        navigate(`/${ROUTES.PANEL}/${SUB_ROUTES.PRESENT}`);
      } else alert('Wrong credentials');
    });
  };

  return (
    <StyledLogInForm onSubmit={handleSubmit}>
      <TextField
        variant="standard"
        value={username}
        onChange={handleChangeUsername}
        required
        placeholder="Username"
      />
      <TextField
        variant="standard"
        type="password"
        value={password}
        onChange={handleChangePassword}
        required
        placeholder="Password"
      />
      <Button type="submit" variant="contained">
        Sign in
      </Button>
      <Link to={`/${ROUTES.HOME}`}>
        <Button>Back to home</Button>
      </Link>
    </StyledLogInForm>
  );
};
