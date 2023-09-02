import { css } from 'styled-components';

const buttonStyles = css`
  background-color: #3a6df0;
  color: #fff;
  border-radius: 20px;
  white-space: nowrap;
  user-select: none;
  border: none;
  padding: 8px 26px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #1e59f1;
  }
`;

export default buttonStyles;
