import { useEffect, useState } from 'react';
import getTask from '../services/getTask';
import postTask from '../services/postTask';
import removeTask from '../services/removeTask';
import updateStatus from '../services/updateStatus';

const useSendTask = () => {
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);

  const getAllTasks = async () => {
    const result = await getTask();
    setAllTasks(result);
  };

  useEffect(() => {
    getAllTasks();
  }, [task]);

  const handleChange = (target) => {
    setTask(target.value);
  };

  const sendTask = async (newTask) => {
    await postTask(newTask);

    const result = await getTask();
    setAllTasks(result);
    setTask('');
  };

  const deleteTask = async (idTask) => {
    const result = allTasks.filter(({ _id: id }) => id !== idTask);
    await removeTask(idTask);

    return setAllTasks(result);
  };

  const changeStatus = async (taskId, taskValue, taskStatus) => {
    await updateStatus(taskId, taskValue, taskStatus);

    const result = await getTask();
    setAllTasks([...result]);
    setTask('');
  };

  return { handleChange, task, sendTask, allTasks, deleteTask, changeStatus };
};

export default useSendTask;
