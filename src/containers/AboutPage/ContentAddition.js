import styled from 'styled-components';

export default styled.div`
  max-width: 450px;
  background-color: ${({ theme }) => theme.colors.contentBg};
  border: 1px solid ${({ theme }) => theme.colors.contentBg};
  border-radius: 14px;
  padding: 20px 40px;
  transition: all 0.3s ease;
  
  @media screen and (max-width: 415px) {
    padding: 20px;
  }
`;
