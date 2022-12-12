import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWare = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined, composedEnhancer);
