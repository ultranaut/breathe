import React from 'react';
import { connect } from 'react-redux';

import styles from './RoundsDisplay.module.css';
import formatTime from '../../utils/formatTime';

const RoundsDisplay = ({ rounds }) => {
  const renderedRounds = rounds.map(({ timestamp, duration }, index) => {
    const formattedDuration = formatTime(duration);
    return (
      <div key={timestamp}>{`Round ${++index}: ${formattedDuration}`}</div>
    );
  });
  return (
    <div className={styles.rounds}>
      <h2>Rounds</h2>
      <div>{renderedRounds}</div>
    </div>
  );
};

const mapStateToProps = ({ rounds }) => {
  return { rounds };
};

export default connect(mapStateToProps)(RoundsDisplay);
