import styled from 'styled-components';

export default styled.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  background-color: ${({ theme }) => theme.colors.dropdownBg};
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.themeToggle};
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  z-index: 3;
  
  svg {
    width: 24px;
    flex-shrink: 0;
  }
`;
