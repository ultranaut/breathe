export const createRound = (timestamp, duration) => {
  return {
    type: 'CREATE_ROUND',
    payload: {
      timestamp,
      duration,
    },
  };
};
