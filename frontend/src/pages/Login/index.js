import React from 'react';
import {
    Container,
    LoginContainer,
    TwitterLogo,
    InputContainer,
    Input,
    AtIcon,
    PasswordIcon,
    LoginButton,
    InputPassword
} from './styles';

import { useState } from 'react';

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usernameLabel = 'Username';
    const passwordLabel = 'Password';
  
    function handleButtonClick() {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      if (sessionStorage.getItem('username') && sessionStorage.getItem('password')) {
        history.push('/');
      }
    }
  
    return (
      <Container>
        <LoginContainer>
          <TwitterLogo />
          <InputContainer>
            <AtIcon />
            <Input
                value={username}
                placeholder={usernameLabel}
                onChange={e => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <PasswordIcon />
            <InputPassword
                type="password"
                value={password}
                placeholder={passwordLabel}
                onChange={e => setPassword(e.target.value)}
            />
          </InputContainer>
          <LoginButton onClick={() => handleButtonClick()}>Sign in</LoginButton>
        </LoginContainer>
      </Container>
    );
  }
  