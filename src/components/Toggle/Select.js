import styled from 'styled-components';

const Select = styled.select`
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1em;
  background-color: transparent;
  border-style: none;
  
  > option {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`;

export default Select;
