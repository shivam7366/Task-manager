const reducers = (tasks = [], action) => {
  switch (action.type) {
    case "FETCH_TASK":
      return action.payload;

    case "CREATE_TASK":
      return [...tasks, action.payload];

    case "DELETE_TASK":
      return [...tasks];
    case "UPDATE_TASK":
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    default:
      return tasks;
  }
};

export default reducers;
