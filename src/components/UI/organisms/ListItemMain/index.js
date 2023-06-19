import React, { useState, useContext } from 'react';
import { ListItemText, ListItem, TextField, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '../../atoms/IconButton';
import { deleteTask, updateTask } from '../../../../services/tasks';
import { GlobalContext } from '../../../../App';
import TextButton from '../../molecules/TextButton';

const ListItemMain = ({ text = '', idItem = '', key = '' }) => {
  const { allTask, setAllTask } = useContext(GlobalContext);
  const { isEditing, setIsEditing } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [inputEdit, setInputEdit] = useState(false);
  const [textValue, setTextValue] = useState(text);

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    const _deleteTask = async () => {
      const change_state = await deleteTask(idItem);
      setAllTask((oldValues) => {
        return oldValues.filter((task) => task.id !== idItem);
      });
      setLoading(false);
    };
    _deleteTask();
  };

  const handleClickEdit = async (event) => {
    event.preventDefault();
    setInputEdit(true);
    setIsEditing(true);
  };

  const handleClickSave = async (event, value) => {
    event.preventDefault();
    setLoadingSave(true);
    setTextValue(value);
    const _updateTask = async () => {
      const change_state = await updateTask(idItem, value);
      setInputEdit(false);
      setLoadingSave(false);
      setIsEditing(false);
    };
    _updateTask();
  };
  return (
    <ListItem key={key}>
      {inputEdit && (
        <ListItemText placeholder='Editar'>
          <TextButton
            name=''
            label='Editar tarea'
            value={textValue}
            icon={<CheckCircleIcon />}
            labelbuton=''
            onClick={(e, value = '') => {
              handleClickSave(e, value);
              setTextValue(value);
            }}
            loading={loadingSave}
          ></TextButton>
        </ListItemText>
      )}
      {!inputEdit && (
        <ListItemText
          primary={textValue}
          placeholder='Editar'
          onClick={(e) => {
            handleClickEdit(e);
          }}
        />
      )}
      {!isEditing && (
        <IconButton
          label='edit'
          color='primary'
          icon={<EditIcon />}
          onClick={(e) => {
            handleClickEdit(e);
          }}
          loading={loading}
        ></IconButton>
      )}
      <IconButton
        label='delete'
        color='error'
        icon={<DeleteIcon />}
        onClick={(e) => {
          handleClick(e);
        }}
        loading={loading}
      ></IconButton>
    </ListItem>
  );
};

export default ListItemMain;
