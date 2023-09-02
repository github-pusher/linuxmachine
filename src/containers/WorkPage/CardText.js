import styled from 'styled-components';

export default styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 20px;
  margin-top: 20px;
  white-space: pre-line;
`;