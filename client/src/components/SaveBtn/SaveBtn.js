import React from 'react';

const SaveBtn = props => (
  <button className='btn btn-success saveBtn' type='button' { ...props }>
    Save
  </button>
);

export default SaveBtn;