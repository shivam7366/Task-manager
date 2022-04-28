const initState = { user: null, isAuth: false };

const reducers = (state = initState, action) => {
  const uState = { ...state };
  switch (action.type) {
    case "SIGN_UP":
      uState.user = action.payload.user;
      uState.isAuth = true;
      return uState;

    case "SIGN_IN":
      uState.user = action.payload.user;
      uState.isAuth = true;
      return uState;
    case "READ_USER":
      uState.user = action.payload;
      uState.isAuth = true;
      return uState;

    case "UPDATE_USER":
      uState.user = action.payload;
      return uState;
    case "LOGOUT_USER_ONE":
      uState.user = null;
      uState.isAuth = false;
      return uState;
    case "LOGOUT_USER_ALL":
      uState.user = null;
      uState.isAuth = false;
      return uState;
    case "DELETE_USER":
      uState.user = null;
      uState.isAuth = false;
      return uState;

    default:
      return state;
  }
};

export default reducers;
