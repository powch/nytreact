import React from 'react';

const SaveBtn = props => (
  <button 
    className='btn btn-success saveBtn' 
    type='button' 
    onClick={props.saveArticle}
    title={props.title}
    url={props.url}
    date={props.date}
    id={props._id}
  >
    Save
  </button>
);

export default SaveBtn;