import "./App.css";
import Welcome from "./components/Welcome";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import Navigation from "./components/layouts/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import TaskApp from "./components/TaskApp";
import { useSelector, useDispatch } from "react-redux";
import { readUser } from "./actions/UserActions";
import { useEffect } from "react";
import Profile from "./components/UI/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  const data = useSelector((state) => state.user);
  // console.log(data);

  return (
    <div>
      <Navigation data={data} />
      <Routes>
        <Route path="/" element={<Welcome isAuthenticated={data.isAuth} />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/TaskApp"
          element={
            data.isAuth ? <TaskApp isAuth={data.isAuth} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/profile"
          element={
            data.isAuth ? <Profile user={data.user} /> : <Navigate to="/" />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
