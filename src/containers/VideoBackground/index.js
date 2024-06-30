import React from 'react';
import PropTypes from 'prop-types';

import {
  setLoopBg
} from './videoBackgroundSlice';

import { store } from '../../app/store';

import Video from './Video';
import Background from './background.mp4';
import BackgroundLoop from './background-loop.mp4';

class VideoBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'loop': props.loopBg,
    };
  }
  
  componentDidMount() {
    store.dispatch(setLoopBg(true));
  }
  
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.loopBg !== this.props.loopBg;
  }
  
  render() {
    return (
      <Video
        src={this.state.loop ? BackgroundLoop : Background}
        width={this.props.width}
        height={this.props.height}
        autoplay={true}
        preload="auto"
        controls={false}
        loop={this.state.loop}
      />
    );
  }
}

VideoBackground.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  loopBg: PropTypes.bool.isRequired,
}

export default VideoBackground;
