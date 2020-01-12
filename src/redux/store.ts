import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./root-reducer";

export const store = createStore(reducers, applyMiddleware(thunk));
