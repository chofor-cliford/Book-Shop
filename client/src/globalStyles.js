import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 
 :root{
    --primary-color: #5f6368;
    --secondary-color: #1a73e8;
    --blue-color: #1867dc;
    --gray-color: #80868b;
    --dark-color: #444746;
    --font1: 'Google Sans', sans-serif;
    --font2: 'Product Sans', Arial sans-serif;
    --font3: 'Roboto', sans-serif;
 }
`;


export default GlobalStyle;
