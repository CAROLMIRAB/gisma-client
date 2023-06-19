import React, { useState } from 'react';
import { InputBase, Paper } from '@mui/material';
import IconButton from '../../atoms/IconButton';

const TextButton = ({
  name = '',
  label = '',
  value = '',
  icon = '',
  labelbuton = '',
  onClick = () => {},
  loading,
}) => {
  const [textValue, setTextValue] = useState(value);
  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={name}
        inputProps={{ 'aria-label': { label } }}
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
      />
      <IconButton
        label=''
        icon={icon}
        color='success'
        onClick={(e) => {
          onClick(e, textValue);
        }}
        loading={loading}
      ></IconButton>
    </Paper>
  );
};

export default TextButton;
