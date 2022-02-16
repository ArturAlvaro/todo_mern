import { useEffect, useState } from 'react';
import getTask from '../services/getTask';
import postTask from '../services/postTask';
import removeTask from '../services/removeTask';

const useSendTask = () => {
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);

  const getAllTasks = async () => {
    const result = await getTask();
    setAllTasks(result);
    localStorage.setItem('tasks', JSON.stringify(result));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

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

  const deleteTask = async (idTask) => {
    const result = allTasks.filter(({ _id: id }) => id !== idTask);
    await removeTask(idTask);

    localStorage.setItem('tasks', JSON.stringify(result));
    return setAllTasks(result);
  };

  return { handleChange, task, sendTask, allTasks, deleteTask };
};

export default useSendTask;
