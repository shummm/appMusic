import React, {Fragment} from 'react';
import './app-list-item.css'

const AppListItem = ({ app }) => {
  const {title, author} = app;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
  );
};

export default AppListItem;