import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  line-height: 32px;
  overflow-x: scroll;
  user-select: none;
  
  @media screen and (max-width: 480px) {
    width: 120px;
  }
`;
