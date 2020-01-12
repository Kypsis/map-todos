import { createStore, applyMiddleware, compose, Middleware } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { rootReducer } from "./root-reducer";

type Middlewares = ThunkMiddleware | Middleware;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares: Middlewares[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
