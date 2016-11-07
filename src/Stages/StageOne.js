import React from 'react';
import { connect } from 'react-redux';
import { initialPassage, addInitialPassage } from '../actions/app_actions';
import './StageOne.css';

const StageOneForm = ( props, context ) => {
  let input;

  return (
    <div>
      <h1>Stage One</h1>
      <p>Write a gramtically correct passage below</p>
      <textarea
          ref={ node => {
            input = node
          }}
          onChange={
            () => props.dispatch( initialPassage( input.value ) )
          }
          value={ props.initial.passage }
          placeholder="Add gramtically correct passage here...">
      </textarea>

      <button
        onClick={
          () => props.dispatch(addInitialPassage( input.value ) )
        }
      >
        Next
      </button>

    </div>
  )
};

export default connect()(StageOneForm);