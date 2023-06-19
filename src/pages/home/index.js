import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Stack,
  Paper,
  Grid,
  Typography,
  LinearProgress,
} from '@mui/material';
import ListMain from '../../components/UI/organisms/ListMain';
import { deleteTask, getAllTask } from '../../services/tasks';
import Form from '../../components/UI/organisms/Form';
import Divider from '@mui/material/Divider';
import { GlobalContext } from '../../App';

const Home = () => {
  const { allTask, setAllTask } = useContext(GlobalContext);
  const [listLoading, setListLoading] = useState(false);

  useEffect(() => {
    setListLoading(true);
    const _getAllTasks = async () => {
      const change_state = await getAllTask();
      setAllTask(change_state);
      setListLoading(false);
    };
    _getAllTasks();
  }, []);

  return (
    <Container>
      <Paper elevation={3} sx={{ m: 10 }}>
        <Form></Form>
      </Paper>
      <Paper elevation={3} sx={{ m: 10 }}>
        <Typography gutterBottom variant='h5' component='div' sx={{ p: 4 }}>
          Tareas
        </Typography>
        <Divider></Divider>
        <Grid container sx={{ p: 4 }}>
          <Grid item md={12}>
            <Stack>
              {listLoading && <LinearProgress color='primary' />}
              <ListMain listItems={allTask} id='list'></ListMain>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
export default Home;
