import { TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  logoutUserAll,
  updateUser,
} from "../../actions/UserActions";

/*1. complete profile section
  2. update user,delete user, logout user
  3. task status compeletd or uncompeletd
  4. add pagination in fetching task
  5. add circular progress 
  6. remove console logs
  7. complete Task manager app
  8. optmize code 
  */

function Profile({ user }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState();
  const [age, setAge] = useState(user.age);
  let formData = {};
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    formData = { name, age, password };
    dispatch(updateUser(formData));
    setPassword("");
  };
  const LogoutAllHandler = (e) => {
    e.preventDefault();

    dispatch(logoutUserAll(formData));
  };
  const deleteHandler = (e) => {
    e.preventDefault();

    dispatch(deleteUser());
  };

  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        sx={{ marginTop: "30px", marginLeft: "44vw", marginBottom: "10px" }}
      >
        Account
      </Typography>{" "}
      <form onSubmit={formSubmitHandler} className="signinform">
        <TextField
          value={name}
          type="name"
          label="Name"
          placeholder="Enter your name"
          required
          margin="normal"
          onChange={nameChangeHandler}
        />
        <TextField
          value={age}
          type="number"
          inputProps={{ minLength: 7 }}
          label="Age"
          margin="normal"
          placeholder="Enter your age"
          required
          onChange={ageChangeHandler}
        />
        <TextField
          value={password}
          type="text"
          inputProps={{ minLength: 7 }}
          label="New Password(optional)"
          margin="normal"
          onChange={passwordChangeHandler}
        />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="contained" type="submit" className="signbtn">
            Update
          </Button>
          <Button
            variant="contained"
            color="error"
            type="button"
            className="signbtn"
            onClick={LogoutAllHandler}
          >
            Logout All
          </Button>
          <Button
            variant="contained"
            color="error"
            type="button"
            className="signbtn"
            onClick={deleteHandler}
          >
            Delete Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
