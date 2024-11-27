// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif;
    background-color: #4B0082; /* Deep Purple */
    color: #F8DBBA; /* Gold text accents */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel Decorative', cursive;
  }

  a {
    font-family: 'Playfair Display', serif;
  }
`;

export default GlobalStyles;
