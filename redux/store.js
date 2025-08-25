import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import adminReducer from "./slices/adminSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
      admin: adminReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
      
  });
  

sagaMiddleware.run(rootSaga);

export default store;