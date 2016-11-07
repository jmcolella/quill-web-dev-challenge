import * as constants from '../constants/app_constants';

export function initialPassage ( input ) {
  return {
    type: constants.INITIAL,
    passage: input
  }
};

export function addInitialPassage ( input ) {
  return {
    type: constants.ADD_PASSAGE,
    passage: input
  }
};

export function changeInitialPassage ( input ) {
  return {
    type: constants.CHANGE_PASSAGE,
    passage: input
  }
};

export function goBackInitial () {
  return {
    type: constants.GO_BACK_INITIAL
  }
};

export function goBackChange () {
  return {
    type: constants.GO_BACK_CHANGE
  }
};

export function comparePassages ( initial, change ) {
  return {
    type: constants.COMPARE_PASSAGES,
    initialPassage: initial,
    changePassage: change
  }
};