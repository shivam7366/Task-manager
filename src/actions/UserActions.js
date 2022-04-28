import * as api from "../api";

export const signupUser = (signupData) => async (dispatch) => {
  try {
    const data = await api.signUpUser(signupData);
    // console.log(data.data.token);
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("isAuth", true);

    dispatch({
      type: "SIGN_UP",
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const signinUser = (signinData) => async (dispatch) => {
  try {
    const data = await api.signInUser(signinData);
    // console.log(data.data.token);
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("isAuth", true);

    dispatch({
      type: "SIGN_IN",
      payload: data.data,
    });
  } catch (error) {
    alert("Your password or your Email is wrong");
  }
};

export const readUser = () => async (dispatch) => {
  try {
    const data = await api.readUser();
    // console.log(data.data);
    dispatch({ type: "READ_USER", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUserOne = () => async (dispatch) => {
  try {
    const data = await api.logoutUserOne();
    // console.log(data.data);
    localStorage.clear("token");
    localStorage.clear("isAuth");
    dispatch({ type: "LOGOUT_USER_ONE", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const logoutUserAll = () => async (dispatch) => {
  try {
    const data = await api.logoutUserAll();
    // console.log(data.data);
    localStorage.clear("token");
    localStorage.clear("isAuth");
    dispatch({ type: "LOGOUT_USER_ALL", payload: data.data });
    alert("Logout successfully");
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (userData) => async (dispatch) => {
  try {
    const data = await api.updateUser(userData);
    // console.log(data.data);
    dispatch({ type: "UPDATE_USER", payload: data.data });
    // alert("Update successfully");
  } catch (error) {
    // console.log(error);
    alert("something went wrong, please try again!");
  }
};
export const deleteUser = () => async (dispatch) => {
  try {
    const data = await api.deleteUser();
    localStorage.clear("token");
    localStorage.clear("isAuth");
    // console.log(data.data);
    dispatch({ type: "DELETE_USER", payload: data.data });
    // alert("Update successfully");
  } catch (error) {
    // console.log(error);
    alert("something went wrong, please try again!");
  }
};
