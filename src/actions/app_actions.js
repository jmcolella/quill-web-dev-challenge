import * as constants from '../constants/app_constants';

export function initialPassage ( input ) {
  return {
    type: constants.ADD_PASSAGE,
    passage: input
  }
};