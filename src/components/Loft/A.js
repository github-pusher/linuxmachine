import styled from 'styled-components';

import NormalA from '../../components/A';

export default styled(NormalA)`
  & + & {
    margin-left: 22px;
  }
  
  @media screen and (max-width: 425px) {
    & + & {
      margin-left: 12px;
    }
  }
  
  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  svg {
    width: 22px;
    color: ${({ theme }) => theme.colors.inactive};
    flex-shrink: 0;
  }
`;
