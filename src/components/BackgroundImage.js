import React, { Component } from 'react';
import styled from 'styled-components';

class BackgroundImage extends Component {
  render() {
    return (
      <div className={this.props.className}>
      </div>
    );
  }
}

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.img});
  background-size: cover;
  opacity: 0.8;
`;

export default StyledBackgroundImage;