import { CREATE_ROUND, RESET_ROUNDS } from '../actions/types';

const roundsReducer = (rounds = [], action) => {
  switch (action.type) {
    case CREATE_ROUND:
      return [...rounds, action.payload];

    case RESET_ROUNDS:
      return [];

    default:
      return rounds;
  }
};

export default roundsReducer;
