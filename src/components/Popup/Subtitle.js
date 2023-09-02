import styled from 'styled-components';

export default styled.div`
  white-space: normal;
  margin: 20px 0 40px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8em;
  white-space: pre-wrap;
  
  @media screen and (max-width: 991.98px) {
    margin: 20px 0;
  }
  
  > a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
