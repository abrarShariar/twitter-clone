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
    SignUpButton,
    InputPassword
} from './styles';

import { useState } from 'react';
import axios from 'axios';
require('dotenv').config()

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const usernameLabel = 'Username';
    const passwordLabel = 'Password';

    async function handleSignUp () {
      try {
        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { username, password });
        setMessage(resp.data.message);
      } catch (errors) {
        console.log(errors);
        setMessage("Failed to create a new user.");
      }
    }

    async function handleLogin () {
      try {
        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password });
        setMessage(resp.data.message);
        console.log(resp.status);
        if (resp.status === 200) {
          console.log("logged in");
          sessionStorage.setItem('isLoggedInTwitter', true);
          sessionStorage.setItem('username', username);
          history.push('/');
        }
      } catch (errors) {
        console.log(errors);
        setMessage("Failed to login user.")
        sessionStorage.removeItem('isLoggedInTwitter');
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
          <SignUpButton onClick={() => handleSignUp()}>Sign up</SignUpButton>
          <LoginButton onClick={() => handleLogin()}>Log in</LoginButton>
          <br/>
          <div>
            {message}
          </div>
        </LoginContainer>

      </Container>
    );
  }
  