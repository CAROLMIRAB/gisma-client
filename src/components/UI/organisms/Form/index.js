import React, { useState, useContext } from 'react';
import { TextField, Stack, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { createTask } from '../../../../services/tasks';
import { GlobalContext } from '../../../../App';

const Form = () => {
  const [textValue, setTextValue] = useState('');
  const { allTask, setAllTask } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const handleClick = async (event, item) => {
    event.preventDefault();
    setLoading(true);
    const _createTask = async () => {
      const change_state = await createTask(textValue);
      setAllTask((current) => [...current, change_state]);
      setLoading(false);
      setTextValue('');
    };
    _createTask();
  };

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ p: 3 }}
    >
      <TextField
        id='create-input'
        label='Tarea'
        margin='dense'
        sx={{ m: 1 }}
        fullWidth
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
      ></TextField>
      <LoadingButton
        variant='contained'
        size='large'
        endIcon={<SaveIcon />}
        sx={{ p: 1.7 }}
        onClick={(e) => {
          handleClick(e);
        }}
        loading={loading}
      >
        Guardar
      </LoadingButton>
    </Stack>
  );
};

export default Form;
