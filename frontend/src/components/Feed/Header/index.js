import React from 'react';
import { Container, Title, TwitterLogo } from './styles';

export default function Header() {
  return (
    <Container>
      <Title>
          <TwitterLogo/>
            @{sessionStorage.getItem('username')}
        </Title>
    </Container>
  );
}
