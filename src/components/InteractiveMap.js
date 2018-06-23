import React, { Component } from 'react';
import styled from 'styled-components';

import BackgroundImage from './BackgroundImage';
import Field from './Field';
import Indicator from './Indicator';

class InteractiveMap extends Component {
  renderHints = () => {
    return this.props.locations
      .filter(loc => loc.revealed)
      .map(loc => <Indicator key={loc.id} x={loc.x} y={loc.y} r={30} />)
  }

  render() {
    return (
      <div className={this.props.className}>
        <BackgroundImage className="map" img={this.props.img} />
        <Field
          className="field"
          onFinalize={this.props.guess}
          flashCorrect={this.props.flashCorrect}
          flashIncorrect={this.props.flashIncorrect}
          onFlashFinish={this.props.onFlashFinish}
        />
        {this.renderHints()}
      </div>
    );
  }
}

const StyledInteractiveMap = styled(InteractiveMap)`
  width: 100%;
  height: 100%;
`;

export default StyledInteractiveMap;