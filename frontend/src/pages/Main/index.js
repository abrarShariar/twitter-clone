import React from 'react';
import { Container, Column } from './styles';
import Feed from '../../components/Feed';

export default function Main() {
  return (
    <Container>
      <Column width="100%">
        <Feed/>
      </Column>
    </Container>
  );
}
