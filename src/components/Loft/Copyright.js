import styled from 'styled-components';

export default styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
