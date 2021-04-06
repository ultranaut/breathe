import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Timer.module.css';
import { createRound } from '../../actions';

class Timer extends Component {
  state = {
    startTime: 0,
    duration: 0,
    active: false,
    intervalId: null,
  };

  formatTime = () => {
    const elapsed = this.state.duration / 1000;
    const mins = Math.floor(elapsed / 60);
    const secs = Math.floor(elapsed % 60);
    const decs = Math.round((elapsed - Math.floor(elapsed)) * 10);

    let formatted = mins.toString().padStart(2, 0) + ':';
    formatted += secs.toString().padStart(2, 0) + '.';
    formatted += decs.toString().slice(0, 1);
    return formatted;
  };

  updateDuration = () => {
    const duration = new Date() - this.state.startTime;
    this.setState({ duration });
  };

  toggleTimer = () => {
    if (!this.state.active) {
      this.setState({
        duration: 0,
        startTime: new Date(),
        active: true,
      });
      const intervalId = setInterval(this.updateDuration, 103);
      this.setState({ intervalId });
    } else {
      clearInterval(this.state.intervalId);
      const duration = new Date() - this.state.startTime;
      this.setState({
        duration: 0,
        active: false,
      });
      this.props.createRound(Date.parse(this.state.startTime), duration);
    }
  };

  render() {
    return (
      <div>
        <div className={styles.timer} onClick={this.toggleTimer}>
          <div className={styles.display}>{this.formatTime()}</div>
          <button className={styles.button}>
            {this.state.active ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { createRound })(Timer);
