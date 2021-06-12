import React from 'react';

import styles from './App.module.css';
import Timer from '../Timer/';
import RoundsDisplay from '../RoundsDisplay';

const App = () => {
  return (
    <div className={styles.container}>
      <Timer />
      <RoundsDisplay />
    </div>
  );
};

export default App;
