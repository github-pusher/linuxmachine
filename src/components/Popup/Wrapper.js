import styled from 'styled-components';

export default styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.popupBg};
  border-radius: 6px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
  overflow-y: auto;
  white-space: normal;
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  padding: 30px 40px;
  transition: all 0.3s;
  
  @media screen and (max-width: 570px) {
    width: 100%;
  }
  
  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;
