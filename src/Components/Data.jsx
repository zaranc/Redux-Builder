import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_USER_PENDING, POST_USER_PENDING, UPDATE_USER_PENDING } from '../Redux-saga/User/action/Action';

const Data = () => {

    let email = useRef()
    let password = useRef()

    // View //

    let [view, setView] = useState();


    let res = useSelector((state) => state.userReducer);

    console.log(res, "sxasdawdasdasdadasdasdas");

    let dispatch = useDispatch();

    // add user //
    let adduser = () => {
        let data = {
            email: email.current.value,
            password: password.current.value
        }

        dispatch({ type: POST_USER_PENDING, payload: data })
    }

    // delete user //

    let handalDelete = (id) => {

        dispatch({ type: DELETE_USER_PENDING, payload: id })
    }

    // update user //

    let handleView = (id, index) => {

        let data = res.user[index]
        
        setView(data);
    };

    let handle = (e) => {
        setView({ ...view, [e.target.name]: e.target.value });
    };

    let update = () => {
        dispatch({ type: UPDATE_USER_PENDING, payload: view })
    };

    // 
    // console.log(res.user, "res")
    return (
        <>

            <input type="text" ref={email} />
            <input type="text" ref={password} />
            <button onClick={adduser}>save</button>
            <br />

            <input type="text" name="email" value={view?.email} onChange={handle} />
            <input type="text" name="password" value={view?.password} onChange={handle} />
            <button onClick={update}>Update</button>

            <div>
                {res.user?.map((val, index) => {
                    return (
                        <>
                            <p>{val.id}</p>
                            <h1>{val.email}</h1>
                            <h2>{val.password}</h2>
                            <button onClick={() => handle(val.id)}>delete</button>
                            <button onClick={() => handleView(val.id, index)}>View</button>
                        </>
                    )
                })

                }
            </div>
        </>
    );
};

export default Data;



