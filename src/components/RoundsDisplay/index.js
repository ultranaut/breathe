import React from 'react';
import { connect } from 'react-redux';

import { resetRounds } from '../../actions';
import formatTime from '../../utils/formatTime';
import styles from './RoundsDisplay.module.css';

const RoundsDisplay = ({ rounds, resetRounds }) => {
  const renderRounds = () => {
    return rounds
      .map(({ timestamp, duration }, index) => {
        return (
          <tr key={timestamp}>
            <td>{`Round ${index + 1}`}</td>
            <td className={styles.tableValue}>{`${formatTime(duration)}`}</td>
          </tr>
        );
      })
      .reverse();
  };

  const renderAverage = () => {
    const totalDuration = rounds.reduce(
      (duration, round) => duration + round.duration,
      0
    );
    const averageDuration = totalDuration / rounds.length;
    return (
      <tr>
        <td>Average</td>
        <td className={styles.tableValue}>{`${formatTime(
          averageDuration
        )}`}</td>
      </tr>
    );
  };

  return (
    <div className={styles.rounds}>
      <table className={styles.dataTable}>
        {/* only show the average if there's something to average */}
        {rounds.length > 1 && <thead>{renderAverage()}</thead>}
        <tbody>{renderRounds()}</tbody>
      </table>

      {rounds.length > 0 && (
        <div className={styles.actions}>
          <button className={styles.resetButton} onClick={resetRounds}>
            Reset
          </button>
          <button className={styles.saveButton}>Save</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ rounds }) => {
  return { rounds };
};

export default connect(mapStateToProps, { resetRounds })(RoundsDisplay);
