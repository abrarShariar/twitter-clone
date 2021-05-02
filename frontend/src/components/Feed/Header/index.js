import React from 'react';
import { Container, Title, TwitterLogo, LogoutButton } from './styles';

export default function Header() {

  function handleLogout () {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("isLoggedInTwitter");
    window.location.replace("/login");
  }

  return (
    <Container>
      <Title>
          <TwitterLogo/>
            @{sessionStorage.getItem('username')}
        </Title>
        <LogoutButton onClick={() => handleLogout()}>Log out</LogoutButton>
    </Container>
  );
}
