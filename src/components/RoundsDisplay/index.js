import React from 'react';
import { connect } from 'react-redux';
import formatTime from '../../utils/formatTime';

const RoundsDisplay = ({ rounds }) => {
  const renderedRounds = rounds.map(({ timestamp, duration }, index) => {
    const formattedDuration = formatTime(duration);
    return (
      <div key={timestamp}>{`Round ${++index}: ${formattedDuration}`}</div>
    );
  });
  return (
    <div>
      <h2>Rounds</h2>
      <div>{renderedRounds}</div>
    </div>
  );
};

const mapStateToProps = ({ rounds }) => {
  return { rounds };
};

export default connect(mapStateToProps)(RoundsDisplay);
