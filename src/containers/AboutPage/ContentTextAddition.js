import styled from 'styled-components';

export default styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7em;
  margin-top: 16px;
  
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  > a:hover {
    text-decoration: underline;
  }
`;
