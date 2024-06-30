import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    font-weight: 400;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    transition: 0.3s;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverMenuBg};
    }
  }
  
  svg {
    width: 16px;
    margin-right: 8px;
  }
`;
