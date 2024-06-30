import styled from 'styled-components';

import NormalVideo from '../../components/Video';

export default styled(NormalVideo)`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;
