import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Timer.module.css';
import { createRound } from '../../actions';
import formatTime from '../../utils/formatTime';

class Timer extends Component {
  state = {
    startTime: 0,
    duration: 0,
    active: false,
    intervalId: null,
  };

  updateDuration = () => {
    const duration = new Date() - this.state.startTime;
    this.setState({ duration });
  };

  toggleTimer = () => {
    if (!this.state.active) {
      const intervalId = setInterval(this.updateDuration, 103);
      this.setState({
        duration: 0,
        startTime: new Date(),
        active: true,
        intervalId,
      });
    } else {
      const duration = new Date() - this.state.startTime;
      clearInterval(this.state.intervalId);
      this.setState({
        duration: 0,
        active: false,
      });
      this.props.createRound(Date.parse(this.state.startTime), duration);
    }
  };

  render() {
    return (
      <div className={styles.timer} onClick={this.toggleTimer}>
        <div className={styles.display}>
          <div className={styles.duration}>
            {formatTime(this.state.duration, true)}
          </div>
        </div>
        <button className={styles.button}>
          {this.state.active ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default connect(null, { createRound })(Timer);
