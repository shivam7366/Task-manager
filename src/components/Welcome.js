// import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Welcome.css";
import Button from "@mui/material/Button";

export default function Welcome(isAuth) {
  const isAuthenticated = isAuth.isAuthenticated;
  // console.log(isAuthenticated);
  const navigate = useNavigate();

  //Sign in handler function
  const signInHandler = () => {
    navigate("/signin");
  };

  // SignUp handler function
  const signUpHandler = () => {
    navigate("/signup");
  };

  const taskappHandler = () => {
    navigate("/TaskApp");
  };

  return (
    <main className="welcome">
      <p className="title">Task App</p>
      <div className="desc">Built using NodeJS, MongoDB and ReactJS</div>

      {!isAuthenticated && (
        <div>
          <Button
            variant="contained"
            style={{ margin: "32px " }}
            onClick={signInHandler}
          >
            Sign in
          </Button>
          <Button variant="outlined" onClick={signUpHandler}>
            Sign up
          </Button>
        </div>
      )}

      {isAuthenticated && (
        <div>
          <Button
            variant="contained"
            style={{ margin: "32px " }}
            onClick={taskappHandler}
          >
            TaskApp
          </Button>
        </div>
      )}
    </main>
  );
}
