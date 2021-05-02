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
require('dotenv').config()

export default function WhatsHappening(props) {
    const [tweet, setTweet] = useState('');
    const { updateTweets } = props;

    async function postTweet () {
        try {
            const username = sessionStorage.getItem('username');
            if (!tweet) {
                window.alert("Please write a cool tweet!");
                return;
            }
            const resp = await axios.post(`${process.env.REACT_APP_API_URL}/tweets`, { username, tweet });
            if (resp.status === 200) {
              setTweet("");
              updateTweets();
            }
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
            <TextArea value={tweet} onChange={e => setTweet(e.target.value)} placeholder="What's Happening Now?"/>
        </RightContainer>
        <TweetButton onClick={() => postTweet()}>Tweet</TweetButton>
      </Container>
    );
  }
  