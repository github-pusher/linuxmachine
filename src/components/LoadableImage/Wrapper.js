import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 100%;
  background: linear-gradient(101.42deg, #dfefff -0.04%, rgba(223, 239, 255, 0.27) 94.2%);
  overflow: hidden;
  
  &::before {
    position: absolute;
    top: 0;
    left: -150px;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent 0%, #ff87ab2e 50%, transparent 100%);
    animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
  
  &.loaded::before {
    animation: none;
  }
  
  @keyframes load {
    from {
      left: -150px;
    }
    to   {
      left: 100%;
    }
  }
  
  > img {
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }
  
  &.loaded > img {
    opacity: 1;
  }
`;
