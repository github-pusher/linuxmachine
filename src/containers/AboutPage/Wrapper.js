import styled from 'styled-components';

import Background from './background.svg';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${Background}),
  linear-gradient(to right top, #1b065eff, #ff47daff, #ff87abff, #fcc8c2ff, #f5eccdff);
  background-repeat: repeat-y;
  border-radius: 14px;
  padding: 20px 40px;
  margin-top: 30px;
  
  @media screen and (max-width: 767.98px) {
    padding: 20px;
    flex-direction: column-reverse;
  }
`;
