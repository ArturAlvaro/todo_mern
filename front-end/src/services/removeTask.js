import axios from 'axios';

const removeTask = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default removeTask;
