import { all } from 'redux-saga/effects'
import { handle_DELETE_USER_SAGA, handle_GET_USER_SAGA, handle_POST_USER_SAGA, handle_UPDATE_USER_SAGA } from "./rootSaga/userSaga";

function* rootSaga() {
    yield all([handle_GET_USER_SAGA(),handle_POST_USER_SAGA(),handle_DELETE_USER_SAGA(),handle_UPDATE_USER_SAGA()]);
}

export default rootSaga;