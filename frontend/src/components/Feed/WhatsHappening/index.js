import React from 'react';

import {
    Container,
    ProfileContainer,
    ProfileIcon,
    TextArea,
    RightContainer,
    TweetButton
} from './styles';

import { useState } from 'react';
import axios from 'axios';

export default function WhatsHappening() {
    const [tweet, setTweet] = useState('');

    async function postTweet () {
        try {
            const username = sessionStorage.getItem('username');
            const resp = await axios.post('http://localhost:8000/api/tweets', { username, tweet });
            window.alert(resp.data.message);
            setTweet("");
          } catch (errors) {
            console.log(errors);
          }
    }

    return (
      <Container>
        <ProfileContainer>
          <ProfileIcon />
        </ProfileContainer>
        <RightContainer>
            <TextArea onBlur={e => setTweet(e.target.value)} placehoder="What's Happening Now?"/>
        </RightContainer>
        <TweetButton onClick={() => postTweet()}>Tweet</TweetButton>
      </Container>
    );
  }
  