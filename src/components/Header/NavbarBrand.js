import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  color: #f9fafb;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  text-decoration: none;
  padding: 0 30px;
  user-select: none;
  
  @media screen and (max-width: 1055px) {
    display: none;
  }
`;
