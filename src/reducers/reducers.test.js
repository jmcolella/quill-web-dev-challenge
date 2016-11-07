import { initial, change, compare, formatArray, compareLogic } from './app_reducers';
import * as Constants from '../constants/app_constants';

describe( 'Reducer::initial', () => {
  it ( 'returns an object with a blank passage as default state', () => {
    let defaultAction = { type: 'unknown' };
    expect( initial( undefined, defaultAction ) ).toEqual({
      passage: ""
    });
  });

  it ( 'returns an object with an assigned passage with action type ADD_INITIAL_PASSAGE', () => {
    let addAction = { passage: 'Hello World', type: Constants.ADD_INITIAL_PASSAGE };
    expect( initial( undefined, addAction ) ).toEqual({
      passage: addAction.passage
    });
  });
});

describe( 'Reducer::change', () => {
  it ( 'returns an object with a blank passage and stageTwo false as default state', () => {
    let defaultAction = { type: 'unknown' };
    expect( change( undefined, defaultAction ) ).toEqual({
      passage: "",
      stageTwo: false
    });
  });

  it ( 'returns an object with a passage ( blank or with content ) and stageTwo true with action type GO_STAGE_TWO', () => {
    let goStageTwoAction = { type: Constants.GO_STAGE_TWO };
    expect( change( undefined, goStageTwoAction ) ).toEqual({
      passage: "",
      stageTwo: true
    });
  });

  it ( 'returns an object with a passage with content and stageTwo as false with action type CHANGE_PASSAGE', () => {
    let changePassageAction = { passage: "Hello World", type: Constants.CHANGE_PASSAGE };
    expect( change( undefined, changePassageAction ) ).toEqual({
      passage: changePassageAction.passage,
      stageTwo: false
    });
  });

  it ( 'returns an object with a passage with content and stageTwo as true with action type CHANGE_PASSAGE', () => {
    let changePassageAction = { passage: "Hello World", type: Constants.CHANGE_PASSAGE };
    expect( change( { passage: "", stageTwo: true }, changePassageAction ) ).toEqual({
      passage: changePassageAction.passage,
      stageTwo: true
    });
  });

  it ( 'returns an object with a blank passage and stageTwo as false with action type GO_BACK_INITIAL', () => {
    let backInitialAction = { type: Constants.GO_BACK_INITIAL };
    expect( change( { passage: "Hello World", stageTwo: true }, backInitialAction ) ).toEqual({
      passage: "",
      stageTwo: false
    });
  });
});

describe( 'Reducer::compare', () => {
  it ( 'returns an object with a blank array and stageThree false as default state', () => {
    let defaultAction = { type: 'unknown' };
    expect( compare( undefined, defaultAction ) ).toEqual({
      comparison: [],
      stageThree: false
    });
  });

  it ( 'returns an object with a comparison array greater than 1 and stageThree true with action type COMPARE_PASSAGES', () => {
    let comparePassagesAction = {
      initialPassage: "Hello friend.",
      changePassage: "Hello, friend.",
      type: Constants.COMPARE_PASSAGES
    };
    expect( compare( undefined, comparePassagesAction ) ).toEqual({
      comparison: [ { initial: "Hello", change: "Hello," } ],
      stageThree: true
    });
  });

  describe( 'Reducer::compare::helper functions', () => {
    describe( 'Reducer::compare::formatArray', () => {
      it ( 'replaces newline characters with spaces and returns an array split on spaces in a string', () => {
        let string = "Hello\n\nWorld.";

        expect( formatArray( string ) ).toEqual( ["Hello", "", "World."] );
      });
    });

    describe( 'Reducer::compare::compareLogic', () => {
      it ( 'returns an array of objects; each object contains differences between the initial string passed and the change string passed', () => {
        let initialString = "Hello World.";
        let changeString = "Hello, World.";

        expect( compareLogic( initialString, changeString ) ).toEqual( [{ initial: "Hello", change: "Hello," }] );
      });
    });
  });

  it ( 'returns an object with stageThree as false with action type GO_BACK_CHANGE', () => {
    let backChangeAction = { type: Constants.GO_BACK_CHANGE };
    expect( compare(
            {
              comparison: [ { initial: "Hello", change: "Hello," } ],
              stageThree: true
            },
            backChangeAction
          )
    ).toEqual({
      comparison: [ { initial: "Hello", change: "Hello," } ],
      stageThree: false
    });
  });
});