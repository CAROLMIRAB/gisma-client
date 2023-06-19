import React from 'react';
import List from '@mui/material/List';
import ListItemMain from '../ListItemMain';

const ListMain = ({ listItems = [] }) => {
  return (
    <List>
      {listItems.map((item, index) => {
        return (
          <ListItemMain
            text={item.description}
            idItem={item.id}
            key={index}
          ></ListItemMain>
        );
      })}
    </List>
  );
};

export default ListMain;
