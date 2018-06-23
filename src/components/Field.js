import React, { Component } from 'react';
import styled from 'styled-components';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.flashCorrect !== this.props.flashCorrect
      || nextProps.flashIncorrect !== this.props.flashIncorrect
    ) {
      setTimeout(() => this.props.onFlashFinish(), 2000);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.finalize();
    }
  }

  handleChange = (e) => {
    this.setState({ currentValue: e.target.value });
  }

  finalize = () => {
    if (this.state.currentValue !== '') {
      this.props.onFinalize(this.state.currentValue);
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <input
          className="input-box"
          placeholder="Enter guess..."
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="submit-button-container">
          <div className="submit-button" onClick={this.finalize}>
            <i className="material-icons">search</i>
          </div>
        </div>
      </div>
    );
  }
}

const StyledField = styled(Field)`
  position: fixed;
  top: 10px;
  left: 10px;

  display: flex;
  
  width: auto;
  min-width: 200px;
  height: 50px;
  padding: 0 5px;

  border-bottom: 4px solid ${p => p.flashCorrect
    ? '#A6E22E'
    : p.flashIncorrect
    ? '#ff5454'
    : '#FD971F'
  };
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 3px;

  transition: all 0.1s linear;

  .input-box {
    border: 0;
    outline: none;
    height: 100%;
    font-size: 2em;
    font-family: "Ubuntu", sans-serif;
    color: white;
    background-color: transparent;
    ::placeholder {
      color: #afafaf;
      opacity: 1;
    }
  }

  .submit-button-container {
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .submit-button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      /* background-color: grey; */
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      i {
        color: ${p => p.flashCorrect
          ? '#A6E22E'
          : p.flashIncorrect
          ? '#ff5454'
          : '#FD971F'
        };
        :hover {
          transform: rotateY(360deg);
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }

`;

export default StyledField;