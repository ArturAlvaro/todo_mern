import { useState } from 'react';
import getTask from '../services/getTask';
import postTask from '../services/postTask';

const useSendTask = () => {
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = (target) => {
    setTask(target.value);
  };

  const sendTask = async (newTask) => {
    await postTask(newTask);

    const result = await getTask();
    setAllTasks(result);
    localStorage.setItem('tasks', JSON.stringify(result));
    setTask('');
  };
  return { handleChange, task, sendTask, allTasks };
};

export default useSendTask;
