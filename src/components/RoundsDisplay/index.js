import React from 'react';
import { connect } from 'react-redux';

const formatTime = (milliseconds) => {
  const elapsed = milliseconds / 1000;
  const mins = Math.floor(elapsed / 60);
  const secs = Math.floor(elapsed % 60);
  const decs = Math.round((elapsed - Math.floor(elapsed)) * 10);

  let formatted = mins.toString().padStart(2, 0) + ':';
  formatted += secs.toString().padStart(2, 0) + '.';
  formatted += decs.toString().slice(0, 1);
  return formatted;
};

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
