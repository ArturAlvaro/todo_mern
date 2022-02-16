import axios from 'axios';

const getTask = async () => {
  try {
    const axiosGetAll = await axios.get('http://localhost:3001/tasks');

    return axiosGetAll.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default getTask;
