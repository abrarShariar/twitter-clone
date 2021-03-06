import styled from 'styled-components';
import { grey, blue, lightBlue, darkBlue } from '../../../global-styles';
import { Star } from 'styled-icons/boxicons-regular';
import { Twitter } from 'styled-icons/boxicons-logos';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  border-bottom: 1px solid ${grey};
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

export const Title = styled.h3`
  font-weight: bold;
  margin-left: 20px;
`;

export const StarIcon = styled(Star).attrs({
  height: '30px'
})`
  color: ${blue};
  padding: 5px 10px;
  margin-right: 10px;
  :hover {
    background-color: ${lightBlue};
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const TwitterLogo = styled(Twitter).attrs({
    height: '30px'
  })`
    color: ${blue};
    margin-bottom: 5px;
  `;
  
export const LogoutButton = styled.button`
    width: 90px;
    height: 40px;
    background-color: ${blue};
    border: none;
    border-radius: 40px;
    margin-right: 10px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    :hover {
      background-color: ${darkBlue};
    }
`;