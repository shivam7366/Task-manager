import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../css/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinUser } from "../../actions/UserActions";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let formData = {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const signInSubmitHandler = (e) => {
    e.preventDefault();
    formData = { email, password };
    dispatch(signinUser(formData));

    navigate("/TaskApp");
    // dispatch(readUser());
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Typography
        component="h1"
        variant="h5"
        sx={{ marginTop: "30px", marginLeft: "44vw", marginBottom: "10px" }}
      >
        Sign in
      </Typography>
      <form onSubmit={signInSubmitHandler} className="signinform" method="POST">
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
        <div>
          <Button variant="contained" type="submit" className="signbtn">
            Sign In
          </Button>
        </div>
      </form>
      <Link to="/signup" style={{ color: "black", marginLeft: "28vw" }}>
        Don't have an account Sign Up?
      </Link>
    </div>
  );
}

export default SignIn;
