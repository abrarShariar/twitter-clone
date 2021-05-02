import React from 'react';

import {
    Container,
    ProfileContainer,
    ProfileIcon,
    TextArea,
    RightContainer
} from './styles';

import { useState } from 'react';

export default function WhatsHappening() {
    const [inputValue, setInputValue] = useState('');

    return (
      <Container>
        <ProfileContainer>
          <ProfileIcon />
        </ProfileContainer>
        <RightContainer>
          <TextArea onBlur={e => setInputValue(e.target.value)} placehoder="What's Happening Now?"/>
        </RightContainer>
      </Container>
    );
  }
  