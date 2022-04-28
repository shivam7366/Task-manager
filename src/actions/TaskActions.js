import * as api from "../api";

export const fetchTask = () => async (dispatch) => {
  try {
    const data = await api.fetchTask();
    // console.log(data.data);
    dispatch({ type: "FETCH_TASK", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (TaskData) => async (dispatch) => {
  try {
    const data = await api.addTask(TaskData);
    // console.log(data.data);

    dispatch({ type: "CREATE_TASK", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const data = await api.deleteTask(id);
    // console.log(data.data);

    dispatch({ type: "DELETE_TASK", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTask = (id, updatedTaskData) => async (dispatch) => {
  try {
    const data = await api.updateTask(id, updatedTaskData);
    // console.log(data.data);
    dispatch({ type: "UPDATE_TASK", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
