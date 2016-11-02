import { combineReducers } from 'redux';
import * as constants from '../constants/app_constants';

const initial = (
  state =
    { passage: "", stageOne: true },
  action
) => {
  switch ( action.type ) {
    case constants.ADD_PASSAGE:
      return Object.assign({}, state, {
        passage: action.passage,
        stageOne: false
      });
    default:
      return state;
  }
};

const change = (
  state = {
    passage: ""
  },
  action
) => {
  switch ( action.type ) {
    case constants.CHANGE_PASSAGE:
      return Object.assign({}, state, {
        passage: action.passage
      });
    default:
      return state;
  }
}

export const passageApp = combineReducers({
  initial: initial,
  change: change
});