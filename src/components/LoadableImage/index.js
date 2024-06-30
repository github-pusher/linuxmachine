import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Wrapper from './Wrapper';

function LoadableImage(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = () => setIsLoaded(true);
    }
  }, [])
  
  return (
    <Wrapper className={classnames(props.className, {
      loaded : isLoaded,
    })}>
      <img ref={imgRef} className={classnames({imgLoaded : isLoaded})} src={props.src} alt={props.alt} />
    </Wrapper>
  );
}

LoadableImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LoadableImage;
