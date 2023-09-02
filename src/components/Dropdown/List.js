import styled from 'styled-components';

export default styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 20px;
  right: 0;
  width: 120px;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.dropdownBg};
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.bgColor};
  pointer-events: none;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
  padding-left: 0;
  margin: 0;
  cursor: pointer;
  z-index: 1;
`;
