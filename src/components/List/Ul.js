import styled from 'styled-components';

export default styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.contentBg};
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.contentBg};
  padding-left: 0;
  margin: 0;
`;
