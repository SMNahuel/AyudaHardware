const initializeState = {
  name: "",
  email: "",
};

function reducer(state = initializeState, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case "logout":
      return initializeState;
    default:
      return { ...state };
  }
}

export default reducer;
