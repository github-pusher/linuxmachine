import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    line-height: 1.15;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    width: 100%;
    height: 100vh;
    
    @media screen and (max-width: 480px) {
      padding: 0.8em;
    }
  }
  
  body.fontLoaded {
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  
  #root {
    width: 100%;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarBg};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
