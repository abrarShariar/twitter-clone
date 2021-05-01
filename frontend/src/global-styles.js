import { createGlobalStyle } from 'styled-components';
export const blue = '#1da1f2';
export const darkBlue = '#1987c6';
export const lightBlue = 'rgba(29, 161, 242, 0.1)';
export const grey = '#E6ECF0';
export const lightGrey = '#f7f7f7';
export const darkGrey = '#989da0';

export const GlobalStyles = createGlobalStyle`
* {
  outline: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: #fff;
}
`;
