import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTask, fetchTask } from "../../actions/TaskActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  borderRadius: "4px",
};

export default function AddTask() {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(token);

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const taskSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(createTask({ description }));
    dispatch(fetchTask());
    setDescription("");
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ textAlign: "center", margin: "50px 46vw" }}
      >
        ADD
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h1"
            sx={{ textAlign: "center" }}
          >
            Add a Task
          </Typography>
          <form method="POST" onSubmit={taskSubmitHandler}>
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
              Add Task
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
