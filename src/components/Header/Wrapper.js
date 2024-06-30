import styled from 'styled-components';

export default styled.header`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 30px;
  white-space: nowrap;
  
  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;
