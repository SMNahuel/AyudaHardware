const initializeState = {
  last_name: "",
  first_name: "",
  email: "",
};
export default function (state = initializeState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "login":
      return {
        last_name: action.payload.last_name,
        first_name: action.payload.first_name,
        email: action.payload.email,
      };
    case "logout":
      return initializeState;
    default:
      return state;
  }
}
