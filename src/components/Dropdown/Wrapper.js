import styled from 'styled-components';

export default styled.div`
  width: 5px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.buttonInactive};
  border-radius: 50%;
  box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonInactive}, 14px 0 0 0 ${({ theme }) => theme.colors.buttonInactive};
  margin: 0 12px;
`;
