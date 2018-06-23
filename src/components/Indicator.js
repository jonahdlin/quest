import React, { Component } from 'react';
import styled from 'styled-components';

class Indicator extends Component {
  render() {
    return (
      <div className={this.props.className}></div>
    );
  }
}

const StyledIndicator = styled(Indicator)`
  @keyframes flash {
    0%   {
      background-color: #F92672;
      transform: scale(1);
    }
    20%  {
      background-color: #A6E22E;
      transform: scale(2);
    }
    40%  {
      background-color: #F92672;
      transform: scale(1);
    }
    60% {
      background-color: #A6E22E;
      transform: scale(2);
    }
    80% {
      background-color: #F92672;
      transform: scale(1);
    }
  }

  width: ${p => p.r * 2}px;
  height: ${p => p.r * 2}px;

  border-radius: 50%;
  border: 5px solid #F92672;
  background-color: transparent;

  animation-name: flash;
  animation-duration: 4s;

  position: fixed;
  top: ${p => p.y}px;
  left: ${p => p.x}px;
`;

export default StyledIndicator;