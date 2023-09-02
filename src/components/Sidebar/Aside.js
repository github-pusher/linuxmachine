import styled from 'styled-components';

export default styled.aside`
  flex-basis: 240px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
  
  @media screen and (max-width: 945px) {
    display: none;
  }
`;
