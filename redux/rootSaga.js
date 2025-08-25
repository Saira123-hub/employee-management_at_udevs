import { all } from "redux-saga/effects";
import { watchFetchUsers } from "./saga/adminSaga";



export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
  ]);
}