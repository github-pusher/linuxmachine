import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.inactive};
  
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
  
  &.fullWidth {
    border: 1px solid ${({ theme }) => theme.colors.inactive};
    border-radius: 20px;
    padding: 8px 26px;
    
    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
