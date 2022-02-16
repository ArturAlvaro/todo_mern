import axios from 'axios';

const postTask = async (task) => {
  try {
    const axiosPost = await axios.post('http://localhost:3001/tasks', {
      task,
    });

    return axiosPost.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default postTask;
