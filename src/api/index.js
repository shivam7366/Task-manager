import axios from "axios";
const getToken = () => "Bearer " + localStorage.getItem("token");

// const data = useSelector((state) => state.user);
// const token = "Bearer " + localStorage.getItem("token");
// console.log(token);

const url = "https://task-manager-sn.herokuapp.com";

export const signUpUser = (signupData) =>
  axios.post(`${url}/users`, signupData);

export const signInUser = async (signinData) =>
  axios.post(`${url}/users/login`, signinData);

export const readUser = async () =>
  axios.get(`${url}/users/me`, {
    headers: {
      Authorization: getToken(),
    },
  });

export const logoutUserOne = async () =>
  axios.post(`${url}/users/logout`, getToken(), {
    headers: {
      Authorization: getToken(),
    },
  });
export const logoutUserAll = async () =>
  axios.post(`${url}/users/logoutAll`, getToken(), {
    headers: {
      Authorization: getToken(),
    },
  });
export const updateUser = async (formData) =>
  axios.patch(`${url}/users/me`, formData, {
    headers: {
      Authorization: getToken(),
    },
  });
export const deleteUser = async () =>
  axios.delete(`${url}/users/me`, {
    headers: {
      Authorization: getToken(),
    },
  });

export const addTask = (TaskData) =>
  axios.post(`${url}/tasks`, TaskData, {
    headers: { Authorization: getToken() },
  });

export const fetchTask = () =>
  axios.get(`${url}/tasks`, { headers: { Authorization: getToken() } });

export const deleteTask = (id) =>
  axios.delete(`${url}/tasks/${id}`, {
    headers: { Authorization: getToken() },
  });

export const updateTask = (id, updatedTaskData) =>
  axios.patch(`${url}/tasks/${id}`, updatedTaskData, {
    headers: { Authorization: getToken() },
  });

// remaining - update Task,logout user,update user, delete user
