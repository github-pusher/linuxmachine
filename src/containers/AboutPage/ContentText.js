import styled from 'styled-components';

export default styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7em;
  color: #f9fafb;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 16px;
  
  @media screen and (max-width: 767.98px) {
    -webkit-line-clamp: 15;
  }
`;
