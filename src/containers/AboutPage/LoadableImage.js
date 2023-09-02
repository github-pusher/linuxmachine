import styled from 'styled-components';

import NormalLoadableImage from '../../components/LoadableImage';

export default styled(NormalLoadableImage)`
  > img {
    width: 186px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    user-select: none;
    
    @media screen and (max-width: 570px) {
      width: 110px;
    }
  }
`;
