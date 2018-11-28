import React from 'react';
import SaveBtn from '../SaveBtn';

export const ListItem = props => (
  <li className="list-group-item" href={props.url} target="_blank">
    <p>{props.title}</p>
    <SaveBtn 
      { ...props }
    />
  </li>
);
