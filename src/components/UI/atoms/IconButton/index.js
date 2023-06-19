import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const IconButton = ({
  label = '',
  color = '',
  icon = '',
  onClick = () => {},
  loading,
}) => {
  return (
    <LoadingButton
      aria-label={label}
      color={color}
      onClick={onClick}
      loading={loading}
    >
      {icon}
    </LoadingButton>
  );
};

export default IconButton;
