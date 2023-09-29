import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ cash: cashReducer, user: userReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

// store.dispatch({ type: "counter/increment" });
// store.dispatch({ type: "counter/increment" });
// store.dispatch({ type: "counter/decremented" });
