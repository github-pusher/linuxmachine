import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
  return (
    <video className={props.className}
           width={props.width}
           height={props.height}
           poster={props.poster}
           onMouseOver={props.onMouseOver}
           onMouseOut={props.onMouseOut}
           autoPlay={props.autoplay}
           preload={props.preload}
           controls={props.controls}
           loop={props.loop}
           muted
    >
      <source src={props.src} />
    </video>
  );
}

Video.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  poster: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  autoplay: PropTypes.bool,
  preload: PropTypes.string,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
};

export default Video;
