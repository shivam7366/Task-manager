import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../actions/UserActions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../css/SignIn.css";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  let formData = {};

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const signupSubmitHandler = (e) => {
    e.preventDefault();
    formData = { name, email, password, age };

    dispatch(signupUser(formData));

    navigate("/TaskApp");
  };
  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        sx={{ marginTop: "30px", marginLeft: "44vw", marginBottom: "10px" }}
      >
        Sign up
      </Typography>
      <form onSubmit={signupSubmitHandler} className="signinform">
        <TextField
          value={name}
          type="text"
          label="Name"
          placeholder="Enter your name"
          required
          margin="normal"
          onChange={nameChangeHandler}
        ></TextField>
        <TextField
          value={email}
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
          margin="normal"
          onChange={emailChangeHandler}
        ></TextField>
        <TextField
          value={age}
          type="number"
          label="Age"
          margin="normal"
          placeholder="Enter your password"
          required
          onChange={ageChangeHandler}
        ></TextField>
        <TextField
          value={password}
          type="password"
          inputProps={{ minLength: 7 }}
          label="Password"
          margin="normal"
          placeholder="Enter your password"
          required
          onChange={passwordChangeHandler}
        ></TextField>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button variant="contained" type="submit" className="signbtn">
          Sign Up
        </Button>
      </form>
      <Link to="/signin" style={{ color: "black", marginLeft: "28vw" }}>
        Have an account Sign In?
      </Link>
    </div>
  );
}

export default SignIn;
