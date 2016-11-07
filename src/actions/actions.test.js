import * as Actions from './app_actions';
import * as Constants from '../constants/app_constants';

describe ( "Action::addInitialPassage", () => {
  it ( 'returns an object with type ADD_INITITAL_PASSAGE and a passage', () =>{
    expect( Actions.addInitialPassage( 'Hello World' ) ).toEqual({
      type: Constants.ADD_INITIAL_PASSAGE,
      passage: 'Hello World'
    });
  });
});

describe ( "Action::goStageTwo", () => {
  it ( 'returns an object with type GO_STAGE_TWO', () =>{
    expect( Actions.goStageTwo() ).toEqual({
      type: Constants.GO_STAGE_TWO
    });
  });
});

describe ( "Action::changeInitialPassage", () => {
  it ( 'returns an object with type CHANGE_PASSAGE and a passage', () =>{
    expect( Actions.changeInitialPassage( 'Hello World' ) ).toEqual({
      type: Constants.CHANGE_PASSAGE,
      passage: 'Hello World'
    });
  });
});

describe ( "Action::goBackInitial", () => {
  it ( 'returns an object with type GO_BACK_INITIAL', () =>{
    expect( Actions.goBackInitial() ).toEqual({
      type: Constants.GO_BACK_INITIAL
    });
  });
});

describe ( "Action::goBackChange", () => {
  it ( 'returns an object with type GO_BACK_CHANGE', () =>{
    expect( Actions.goBackChange() ).toEqual({
      type: Constants.GO_BACK_CHANGE
    });
  });
});

describe ( "Action::comparePassages", () => {
  it ( 'returns an object with type COMPARE_PASSAGES, an initialPassage and a changePassage', () =>{
    expect( Actions.comparePassages( 'Hello World', 'Hello World!' ) ).toEqual({
      type: Constants.COMPARE_PASSAGES,
      initialPassage: 'Hello World',
      changePassage: 'Hello World!'
    });
  });
});