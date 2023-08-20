import { applyMiddleware, createStore } from "redux";
import reportAddReducer from "../report/reportReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  reportAddReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
