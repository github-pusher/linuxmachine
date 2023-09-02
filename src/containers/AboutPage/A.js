import styled from 'styled-components';

import NormalA from '../../components/A';

export default styled(NormalA)`
  display: block;
  width: fit-content;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  background-color: #3a6df0;
  color: #fff;
  border-radius: 20px;
  padding: 8px 26px;
  margin-top: 16px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #1e59f1;
  }
`;
