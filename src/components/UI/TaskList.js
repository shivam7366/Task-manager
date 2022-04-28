import {
  Button,
  Box,
  Typography,
  Modal,
  Checkbox,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, fetchTask, updateTask } from "../../actions/TaskActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TaskList({ task }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [completed, setChecked] = React.useState(task.completed);

  const handleChange = async (event) => {
    // event.preventDefault();
    setChecked(event.target.checked);
    taskUpdateHandler();
  };

  const [description, setDescription] = React.useState("");
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  //delete task
  const deleteHandler = async () => {
    await dispatch(deleteTask(task._id));
    await dispatch(fetchTask());
  };
  const updatedDataHandler = (e) => {
    e.preventDefault();
    taskUpdateHandler();
  };

  //update task description
  const taskUpdateHandler = async () => {
    await dispatch(updateTask(task._id, { description, completed }));

    setDescription("");
    handleClose();
  };

  // console.log(task);
  return (
    <li
      key={task._id}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div>
        <Checkbox
          checked={completed}
          onClick={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />

        {task.description}
      </div>

      <div>
        <Button onClick={handleOpen}>
          <EditIcon fontSize="small" />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {" "}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h1"
              sx={{ textAlign: "center" }}
            >
              Edit Task ({task.description})
            </Typography>
            <form method="POST" onSubmit={updatedDataHandler}>
              {" "}
              <TextField
                sx={{ margin: "32px 0" }}
                value={description}
                type="text"
                label="Description"
                required
                margin="normal"
                onChange={descriptionChangeHandler}
                fullWidth
              ></TextField>
              <Button variant="contained" fullWidth type="submit">
                Done
              </Button>
            </form>
          </Box>
        </Modal>
        <Button size="small" color="primary" onClick={deleteHandler}>
          <DeleteIcon fontSize="small" />
        </Button>
      </div>
    </li>
  );
}

export default TaskList;
