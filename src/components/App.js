import React from 'react';

import Timer from './Timer/';
import RoundsDisplay from './RoundsDisplay';

const App = () => {
  return (
    <div className="ui container">
      <Timer />
      <RoundsDisplay />
    </div>
  );
};

export default App;
