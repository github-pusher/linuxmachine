import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 16px 0 40px;
  margin-left: auto;
  
  @media screen and (max-width: 320px) {
    padding: 0 16px 0 16px;
  }
`;
