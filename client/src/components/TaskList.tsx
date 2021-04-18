import React from 'react';
import { Center, Grid, Heading } from '@chakra-ui/layout';
import TaskItem from './TaskItem';
import { Task } from '../Home';

type Props = {
  tasks: Task[] | null;
  taskDelete: (id: number) => void;
};

const TaskList: React.FC<Props> = ({ tasks, taskDelete }) => {
  console.log(tasks);
  return (
    <section>
      {tasks && tasks.length > 0 ? (
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {tasks.map((task: Task) => (
            <TaskItem key={task.id} task={task} taskDelete={taskDelete} />
          ))}
        </Grid>
      ) : (
        <Center my="12">
          <Heading as="h2" size="3xl">
            Oops... you don't have any tasks!
          </Heading>
        </Center>
      )}
    </section>
  );
};

export default TaskList;
