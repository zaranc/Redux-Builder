import axios from "axios";
import { DELETE_USER, GET_USER, POST_USER, PUT_USER, base_url } from "../../Constant";


let get_user = (action) => {
    console.log(action, "action from api");
    return axios.get(base_url + GET_USER).then((res) => {
        console.log(res, "api");
        let data = res.data;
        let status = res.status;
        return { data, status };
    });  
};

// add user //

let post_user = (action) => {
    console.log(action,"from api");

    return axios.post(base_url + POST_USER, action.payload).then((res) => {
        console.log(res, "post res");
        let data = res.data;
        let status = res.status;

        return {data, status}
    });
};

// delete user //

let delete_user = (action) => {
    
    return axios.delete(base_url + DELETE_USER + action.payload).then((res) => {
        
        let data = res.data;
        let status = res.status

        return {data, status}
    })
}

let update_user = (action) => {
    
    return axios.put(base_url + PUT_USER + action.payload.id, action.payload).then((res) => {
        
        let data = res.data;
        let status = res.status;

        return { data, status };
    })
}
export {
    get_user, post_user, delete_user, update_user}