import styled from 'styled-components';

import NormalA from '../../components/A';

export default styled(NormalA)`
  display: block;
  width: fit-content;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  background-color: #6c757d;
  color: #fff;
  border-radius: 20px;
  padding: 8px 26px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #5a6268;
  }
`;
