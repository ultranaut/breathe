import { CREATE_ROUND, RESET_ROUNDS } from './types';

export const createRound = (timestamp, duration) => {
  return {
    type: CREATE_ROUND,
    payload: {
      timestamp,
      duration,
    },
  };
};

export const resetRounds = () => {
  return { type: RESET_ROUNDS };
};
