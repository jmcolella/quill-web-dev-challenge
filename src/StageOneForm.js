import React from 'react';
import { connect } from 'react-redux';
import { initialPassage } from './actions/app_actions';

const StageOneForm = ( props, context ) => {
  let input;

  return (
    <div>
      <textarea
          ref={ node => {
            input = node
          }}
          placeholder="Add gramtically correct passage">
      </textarea>

      <button
        onClick={
          () => props.dispatch(initialPassage( input.value ) )
        }
      >
        Next
      </button>

    </div>
  )
};

export default connect()(StageOneForm);