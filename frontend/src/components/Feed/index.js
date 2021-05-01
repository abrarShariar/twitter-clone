import React from 'react';
import { Container } from './styles';
import Header from './Header';
import Tweets from './Tweets';

export default function Feed() {
    return (
      <Container>
        <Header />
        <Tweets />
      </Container>
    );
  }
