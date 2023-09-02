import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: calc(33.3% - 20px);
  background-color: ${({ theme }) => theme.colors.contentBg};
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.contentBg};
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  svg {
    width: 28px;
    border-radius: 6px;
    margin-right: 12px;
    flex-shrink: 0;
  }
  
  & + & {
    margin-left: 20px;
  }
  
  @media screen and (max-width: 1110px) {
    width: calc(50% - 20px);
    
    &:nth-last-child(2) {
      margin-top: 20px;
      margin-left: 0;
    }
    
    &:last-child {
      margin-top: 20px;
    }
  }
  
  @media screen and (max-width: 565px) {
    width: calc(100% - 20px);
    margin-top: 20px;
    
    & + & {
      margin-left: 0;
    }
  }
`;
