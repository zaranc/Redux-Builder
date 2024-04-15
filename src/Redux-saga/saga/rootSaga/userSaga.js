import { takeLatest} from 'redux-saga/effects'
import { handle_GET_USER, handle_POST_USER , handle_DELETE_USER, handle_UPDATE_USER} from "../user/manageUser"
import { DELETE_USER_PENDING, GET_USER_PENDING, POST_USER_PENDING, UPDATE_USER_PENDING } from "../../User/action/Action"


// get user //
function* handle_GET_USER_SAGA() {
    
    yield takeLatest(GET_USER_PENDING, handle_GET_USER)
}

//post user //

function* handle_POST_USER_SAGA() {
    
    yield takeLatest(POST_USER_PENDING, handle_POST_USER)
}

// delete user //

function* handle_DELETE_USER_SAGA() {

    yield takeLatest(DELETE_USER_PENDING, handle_DELETE_USER)
}

// UPDATE USER //

function* handle_UPDATE_USER_SAGA() {

    yield takeLatest(UPDATE_USER_PENDING, handle_UPDATE_USER)
}
export{handle_GET_USER_SAGA,handle_POST_USER_SAGA,handle_DELETE_USER_SAGA,handle_UPDATE_USER_SAGA}