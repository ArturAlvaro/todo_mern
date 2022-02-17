import axios from 'axios';

const updateStatus = async (id, task, status) => {
  try {
    const axiosPost = await axios.put(`http://localhost:3001/tasks/${id}`, {
      task,
      status,
    });

    return axiosPost.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default updateStatus;
