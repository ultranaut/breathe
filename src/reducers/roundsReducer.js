import { CREATE_ROUND } from '../actions/types';

const roundsReducer = (rounds = [], action) => {
  switch (action.type) {
    case CREATE_ROUND:
      return [...rounds, action.payload];
    default:
      return rounds;
  }
};

export default roundsReducer;
