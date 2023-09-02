import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  text-decoration : none;
  color: ${({ theme }) => theme.colors.inactive};
  border-bottom: 2px solid transparent;
  padding: 20px 24px;
  transition: 0.3s;
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
  
  &:not(.active):hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.inactive};
  }
  
  @media screen and (max-width: 320px) {
    padding: 20px 12px;
  }
`;
