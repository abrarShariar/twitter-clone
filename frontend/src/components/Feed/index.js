import React from 'react';
import { Container } from './styles';
import Header from './Header';
import Tweets from './Tweets';
import WhatsHappening from './WhatsHappening';
import { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config()

export default function Feed() {
    const [tweets, setTweets] = useState([]); 

    useEffect(() => {
      getTweets();
    }, []);

    async function getTweets() {
      try {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/tweets`);
        console.log(resp.data.tweetsList);
        setTweets(resp.data.tweetsList);
      } catch (errors) {
        console.log(errors);
      }
    }

    return (
      <Container>
        <Header />
        <WhatsHappening updateTweets={getTweets}/>
        <Tweets tweets={tweets} />
      </Container>
    );
  }
