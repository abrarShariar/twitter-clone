import React from 'react';

import {
  Container,
  Tweet,
  ProfileContainer,
  ProfileIcon,
  RightContainer,
  Header,
  UserData,
  TweetData,
  TweetAuthor,
  Content
} from './styles';


export default function Tweets({ tweets }) {
  return (
    <Container>
      {tweets &&
        tweets.map(tweet => (
          <Tweet key={tweet.id}>
            <ProfileContainer>
              <ProfileIcon />
            </ProfileContainer>
            <RightContainer>
              <Header>
                <UserData>
                  <TweetAuthor>{tweet.username}</TweetAuthor>
                  <TweetData>@{tweet.username}</TweetData>
                  <TweetData>
                    {tweet.timestamp}
                  </TweetData>
                </UserData>
              </Header>
              <Content>
                <span>{tweet.tweet}</span>
              </Content>
            </RightContainer>
          </Tweet>
        ))}
    </Container>
  );
}
