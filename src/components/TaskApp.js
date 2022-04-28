import TaskList from "./UI/TaskList";
import AddTask from "./forms/AddTask";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../actions/TaskActions";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";

export default function TaskApp({ isAuth }) {
  // const token = "Bearer " + localStorage.getItem("token");/
  // console.log(token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks.length);
  const tasklist = tasks.map((task) => {
    return (
      <ul key={task._id}>
        <TaskList task={task} isAuth={isAuth} />
      </ul>
    );
  });

  return (
    <>
      <AddTask />
      {tasks.length ? (
        tasklist
      ) : (
        <Typography
          variant="h6"
          color="GrayText"
          style={{ textAlign: "center" }}
        >
          Add Task and see magic
        </Typography>
      )}
    </>
  );
}
