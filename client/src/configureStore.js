import { createStore } from "redux";
import Reducers from "./reducers";

const configureStore = () => {
  const store = createStore(
    Reducers /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
