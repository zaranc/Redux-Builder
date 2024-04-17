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



            <div>
                {res.user?.map((val, index) => {
                    return (
                        <>
                            <p>{val.id}</p>
                            <h1>{val.email}</h1>
                            <h2>{val.password}</h2>
                            <button className='btn btn-danger me-3'    onClick={() => handle(val.id)}>delete</button>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleView(val.id, index)} className='btn btn-primary'>update</button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">

                                            <div class="card" style={{ width: "100%" }}>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="mb-3">
                                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                            <input type="email" name="email" value={view?.email} onChange={handle} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                                            <input type="text" name="password" value={view?.password} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={update}>update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })

                }
            </div>
        </>
    );
};

export default Data;



