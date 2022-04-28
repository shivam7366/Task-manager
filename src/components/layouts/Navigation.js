import React from "react";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import "../../css/Navigation.css";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserOne } from "../../actions/UserActions";

export default function Navigation({ data }) {
  const user = data.user;
  const isAuth = data.isAuth;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const isAuthenticated = localStorage.getItem("token");
  // console.log(user.user);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logoutUserOne());
    localStorage.clear("token");
    localStorage.clear("isAuth");
    handleClose();
  };
  const profileHandler = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <nav>
      <div>
        <AssignmentTurnedInIcon />
      </div>
      {isAuth && (
        <div>
          <NavLink
            to="/"
            style={{ color: "white", margin: "20px", textDecoration: "none" }}
          >
            TaskApp
          </NavLink>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
          >
            {user.name}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={profileHandler}>Account</MenuItem>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
}
