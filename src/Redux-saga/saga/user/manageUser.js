import { call, put } from 'redux-saga/effects'
import { delete_user, get_user, post_user, update_user } from "../../User/api/Api";
import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from '../../User/action/Action';


// get user //
function* handle_GET_USER(action) {

    console.log(action, "action from manage");
    try {

        let { data, status } = yield call(get_user, action);
        console.log(status,"asdfghjklkjhgfd");

        if (status === 200) {
            yield put({ type: GET_USER_SUCCESS, data });
        }
        else {
            yield put({ type: GET_USER_ERROR, data });
        }
    }
    catch(err) {
        yield put({ type: GET_USER_ERROR, err});
    }
}


// post user //

function* handle_POST_USER(action) {
    console.log(action,"manage action");

    try {

        let { data, status } = yield call(post_user, action);
        console.log(data,"asdfghjklkjhgfd");

        if (status == 201 || status == 200) {
            yield put({ type: POST_USER_SUCCESS, data });
        }
        else {
            yield put({ type: POST_USER_ERROR, data });
        }
    }
    catch(err) {
        yield put({ type: POST_USER_ERROR, err});
    }
}

// delete user //

function* handle_DELETE_USER(action) {
    
    try {
        
        let { data, status } = yield call(delete_user, action);

        if (status == 200) {
            yield put({ type: DELETE_USER_SUCCESS, data });
        }
        else {
            yield put({ type: DELETE_USER_ERROR, data });
        }
    }
    catch(err) {
        yield put({ type: DELETE_USER_ERROR, err});
    }

}

function* handle_UPDATE_USER(action) {
    
    try {
        let { data, status } = yield call(update_user, action)
        
        if (status == 200) {
            yield put({type: UPDATE_USER_SUCCESS, data})
        }
        else {
            yield put({type:UPDATE_USER_ERROR, data})
        }
    }
    catch (err) {
        yield put({type:UPDATE_USER_ERROR, data:err})
    }
}

export {handle_GET_USER,handle_POST_USER,handle_DELETE_USER,handle_UPDATE_USER}