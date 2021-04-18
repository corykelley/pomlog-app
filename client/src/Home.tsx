import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

export interface Task {
  id: number;
  title: string;
  description: string;
  time_limit: number;
  start_date: number | null;
}

function Home() {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  const getTasks = () => {
    fetch(`/api/tasks/`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasks);
        console.log(data.tasks);
      });
  };

  const taskSubmit = (method: string, data: object, id?: number) => {
    fetch(`/api/tasks/new/${id || ''}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.json());
      getTasks();
    });
  };

  const taskDelete = (id: number) => {
    fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getTasks();
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <TaskList tasks={tasks} taskDelete={taskDelete} />
      <AddTask taskSubmit={taskSubmit} />
    </>
  );
}

export default Home;
