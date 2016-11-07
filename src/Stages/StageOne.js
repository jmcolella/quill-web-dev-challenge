import React from 'react';
import { connect } from 'react-redux';
import { addInitialPassage, goStageTwo } from '../actions/app_actions';
import './StageOne.css';

const StageOne = ( props, context ) => {
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
            () => props.dispatch( addInitialPassage( input.value ) )
          }
          value={ props.initial.passage }
          placeholder="Add gramtically correct passage here...">
      </textarea>

      {
        props.initial.passage === "" ?
          <p className="continue-text">Please enter a passage to continue.</p> :
          <button
            onClick={
              () => props.dispatch( goStageTwo() )
            }
          >
            Next
          </button>
      }


    </div>
  )
};

export default connect()(StageOne);