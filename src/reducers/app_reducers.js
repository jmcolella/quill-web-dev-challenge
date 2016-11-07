import { combineReducers } from 'redux';
import * as constants from '../constants/app_constants';

const initial = (
  state = { passage: "" },
  action
) => {
  switch ( action.type ) {
    case constants.ADD_INITIAL_PASSAGE:
      return Object.assign({}, state, {
        passage: action.passage
      });
    default:
      return state;
  }
};

const change = (
  state = {
    passage: "",
    stageTwo: false
  },
  action
) => {
  switch ( action.type ) {
    case constants.GO_STAGE_TWO:
      return Object.assign({}, state, {
        stageTwo: true
      });
    case constants.CHANGE_PASSAGE:
      return Object.assign({}, state, {
        passage: action.passage
      });
    case constants.GO_BACK_INITIAL:
      return Object.assign({}, state, {
        passage: "",
        stageTwo: false
      });
    default:
      return state;
  }
}

const formatArray = ( string ) => {
  for ( let i = 0; i < string.length; i++ ) {
    if ( string[i] === "\n" ) {
      string = string.replace(string[i], " ");
    }
  }

  return string.split(" ");
}

const compareLogic = ( initial, change ) => {
  let initialArr = formatArray( initial );
  let changeArr = formatArray( change );
  let finalArr = [];

  for ( let i = 0; i < initialArr.length; i++ ) {
    if ( initialArr[i] !== changeArr[i] ) {
      if ( initialArr[i].includes(",") && !changeArr[i].includes(",") ) {
        let tempInitialString = "";
        let tempChangeString = "";
        while ( initialArr[i].includes(",") && !changeArr[i].includes(",") ) {
          tempInitialString += initialArr[i] + " ";
          tempChangeString += changeArr[i] + " ";
          i++
        }
        finalArr.push(
          {
            initial: tempInitialString,
            change: tempChangeString,
          }
        )

      } else {
        finalArr.push(
          {
            initial: initialArr[i],
            change: changeArr[i],
          }
        )
      }
    }
  }
  return finalArr;
}

const compare = (
  state = {
    comparison: [],
    stageThree: false
  },
  action
) => {
  switch ( action.type ) {
    case constants.COMPARE_PASSAGES:
      return Object.assign({}, state, {
        comparison: compareLogic( action.initialPassage, action.changePassage ),
        stageThree: true
      });
    case constants.GO_BACK_CHANGE:
      return Object.assign({}, state, {
        stageThree: false
      });
    default:
      return state;
  }
}

export const passageApp = combineReducers({
  initial: initial,
  change: change,
  compare: compare
});