import React from 'react';
import { connect } from 'react-redux';
import { changeInitialPassage, goBackInitial, comparePassages } from '../actions/app_actions';
import './StageOne.css';

const StageTwoForm = ( props, context ) => {
  let input;

  return (
    <div>
      <h1>Stage Two</h1>
      <p>Make gramtically incorrect edits to the passage written in the previous stage.</p>
      <textarea
          ref={ node => {
            input = node
          }}
          onChange={
            () => props.dispatch( changeInitialPassage( input.value ) )
          }
          value={
            props.change.passage === "" ? props.initial.passage : props.change.passage
          }
      >
      </textarea>

      <button
        onClick={
          () => props.dispatch( goBackInitial() )
        }
      >
        Back
      </button>

      <button
        onClick={
          () => props.dispatch(comparePassages( props.initial.passage, input.value ) )
        }
      >
        Next
      </button>

    </div>
  )
};


export default connect()(StageTwoForm);