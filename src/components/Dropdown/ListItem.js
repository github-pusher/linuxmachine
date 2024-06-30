import styled from 'styled-components';

export default styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 18px;
  font-size: 16px;
  white-space: nowrap;
  transition: all 0.3s;
  
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
  }
`;
