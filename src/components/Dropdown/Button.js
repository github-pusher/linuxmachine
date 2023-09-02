import styled from 'styled-components';

export default styled.button`
  position: relative;
  display: flex;
  top: -24px;
  left: -5px;
  width: 40px;
  height: 53px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  &.active {
    ul {
      opacity: 1;
      pointer-events: all;
      transform: translateY(25px);
    }
  }
`;
