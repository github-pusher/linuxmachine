import styled from 'styled-components';

export default styled.li`
  list-style: none;
  transition: all 0.3s;
  cursor: default;
  background-color: ${({ theme }) => theme.colors.contentBg};
  
  &:first-child {
    border-radius: 13px 13px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 13px 13px;
  }
  
  &:only-child {
    border-radius: 13px;
  }
  
  & + li {
    border-top: 1px solid ${({ theme }) => theme.colors.contentBg};
  }
  
  svg {
    width: 28px;
    border-radius: 6px;
    margin-right: 16px;
    flex-shrink: 0;
  }
`;
