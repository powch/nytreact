import React from 'react';
import SaveBtn from '../SaveBtn';
import DeleteBtn from '../DeleteBtn';

export const ListItem = props => (
  <li className="list-group-item" href={props.webUrl} target="_blank">
    <p>{props.title}</p>
    {
      (!props.favorite)
        ? <SaveBtn
            saveArticle={props.saveArticle}
            id={props._id}
            title={props.title}
            url={props.url}
            date={props.date}
          />
        : <DeleteBtn 
            id={props.id}
            deleteArticle={props.deleteArticle}
          />
    }
  </li>
);
