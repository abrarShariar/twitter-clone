import styled from 'styled-components';
import { blue } from '../../../global-styles';
import { UserCircle } from 'styled-icons/boxicons-solid';
import { Twitter } from 'styled-icons/boxicons-logos';

import { grey, darkGrey, lightGrey, lightBlue } from '../../../global-styles';

export const iconHover = `:hover {
  background-color: ${lightBlue};
  cursor: pointer;
  border-radius: 50%;
}`;

export const Container = styled.div`
  margin: 10px 0px;
  width: 100%;
  background-color: #fff;
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

export const Tweet = styled.div`
  margin-left: 1px solid ${grey};
  width: 100%;
  border-top: 1px solid ${grey};
  min-height: 100px;
  display: flex;
  :hover {
    cursor: pointer;
    background-color: ${lightGrey};
  }
`;

export const ProfileContainer = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
`;

export const ProfileIcon = styled(UserCircle).attrs({
  height: '70px'
})`
  color: ${darkGrey};
  padding: 10px;
  margin: 20px 0px;
`;

export const RightContainer = styled.div`
  width: 90%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserData = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TweetAuthor = styled.span`
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;

export const TweetData = styled.span`
  color: ${darkGrey};
  margin-left: 10px;
`;

export const Content = styled.div`
  width: 100%;
  min-height: 45px;
  display: flex;
`;

export const Actions = styled.div`
  width: 80%;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
`;

export const TwitterLogo = styled(Twitter).attrs({
    height: '100px'
  })`
    color: ${blue};
    margin-bottom: 50px;
  `;
  